import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async() => {
        try{
           const res = await axios.post("http://localhost:7777/login", {email,password},{withCredentials:true})
           console.log(res)
        }
        catch(err){
            console.log(err.message)
        }
       
    }
  return (
    <><div className=" flex justify-center ">
      <div className="card bg-base-100 w-96  shadow-xl">
        <div className="card-body ">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs justify-center">
              <div className="label">
                <span className="label-text">Email ID:</span>
              </div>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs justify-center">
              <div className="label">
                <span className="label-text">Password :</span>
              </div>
              <input
                type="password"
                placeholder="*********"
                className="input input-bordered w-full max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions flex justify-center my-2">
            <button className="btn btn-primary px-6 " onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Login;
