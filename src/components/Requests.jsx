import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const request = async () => {
    try {
      const res = await axios.get(
        "http://localhost:7777/user/request/received",
        { withCredentials: true }
      );
      console.log(res);
      if (res.status == 200) {
        console.log("request save to store");
        dispatch(addRequest(res?.data?.receviedRequest));
      }
    } catch (err) {
      //handle error
    }
  };
  useEffect(() => {
    request();
  }, []);

  console.log(request._id);

  const reviewRequest = async (Id, status) => {
    try {
      console.log(Id, "request id", status);
      const res = await axios.post(
        "http://localhost:7777/request/review/" + status + "/" + Id,
        {},
        { withCredentials: true }
      );

      dispatch(removeRequest(Id));
    } catch (err) {
      //handle error
    }
  };

  if (!requests) return;

  if (requests.length === 0)
    return <h1 className="text-center">No Pending Request</h1>;

  return (
    <>
      <div className="flex flex-col items-center ">
        <h1>Pending Requests</h1>
        {requests.map((request) => {
          const { firstName, lastName, gender, photoUrl, age, _id } =
            request.fromUserId;

          return (
            <div
              key={_id}
              className="flex flex-col items-center sm:flex-row sm:justify-center bg-base-300 gap-2 p-2"
            >
              <div>
                <img
                  src={photoUrl}
                  className="w-16 h-20 object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="text-center sm:text-left">
                  <h2>{firstName + " " + lastName}</h2>
                  {age && gender && <p>{gender + " " + age}</p>}
                </div>
                <div className="flex gap-2 ">
                  <button
                    className="btn btn-outline btn-primary py-2"
                    onClick={() => reviewRequest(request._id, "accept")}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-outline btn-secondary"
                    onClick={() =>
                      reviewRequest("6793a89749644ccd972e49a2", "reject")
                    }
                  >
                    Reject
                  </button>
                  {/* <button className="btn btn-outline btn-accent">Accent</button> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Requests;
