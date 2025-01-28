import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate, Navigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const { isAuthentigate } = useSelector((store) => store.user);

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/login",
        { email, password },
        { withCredentials: true }
      );

      const result = dispatch(addUser(res.data.user));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  if (isAuthentigate) return <Navigate to="/" />;
  return (
    <>
      <div className=" flex justify-center mt-5">
        <div className="card bg-base-200 w-96  shadow-xl">
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
            {error && <p className="text-red-500 bold"> {error}</p>}
            <div className="card-actions flex justify-center my-2">
              <button className="btn btn-primary px-6 " onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
