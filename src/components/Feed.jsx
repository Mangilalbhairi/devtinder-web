import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const [userFeed, setFeedUser] = useState([]);
  const dispatch = useDispatch();
  const fetchFeed = async () => {
    try {
      const feedUser = await axios.get(
        "http://localhost:7777/user/request/feed",
        { withCredentials: true }
      );
      if (feedUser.data.userFeed.length && feedUser.data.userFeed.length > 0) {
        setFeedUser(feedUser.data.userFeed);
        dispatch(addFeed(feedUser.data.userFeed));
      }
    } catch (err) {
      //handle error
    }
  };
  useEffect(() => {
    fetchFeed();
    console.log("feed api calling");
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start px-5 ">
        {userFeed.map((user, index) => {
          return <UserCard key={index} user={user} />;
        })}
      </div>
    </>
  );
};
export default Feed;
