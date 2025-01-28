import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection, removeConnection } from "../utils/connectionSlice";

const Connection = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connnection);

  const fetchConnection = async () => {
    try {
      const res = await axios.get(
        "http://localhost:7777/user/request/connection",
        { withCredentials: true }
      );

      if (res.status == 200) {
        dispatch(addConnection(res?.data?.userConnection));
      } else {
        console.log("remove ");
        dispatch(removeConnection());
      }
    } catch (err) {
      //handle error
    }
  };
  useEffect(() => {
    fetchConnection();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1>No Connections Found</h1>;
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-center bold text-2xl my-4">Connections</h1>

        {connections.map((user) => {
          const { firstName, lastName, gender, age, about, photoUrl, _id } =
            user;
          return (
            <div
              key={_id}
              className="flex flex-col sm:flex-row  items-center justify-center gap-2 bg-base-300 my-1 sm:my-1 rounded-lg p-2"
            >
              <div>
                <img
                  src={photoUrl}
                  className="w-16 h-20 rounded-2xl object-cover"
                />
              </div>
              <div className=" text-center sm:text-left">
                <h2>{firstName + " " + lastName}</h2>
                {gender && age && <p> {gender + " ," + age} </p>}
                {about && <p>{about}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Connection;
