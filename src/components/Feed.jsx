import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Feed = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);

  if (!user) {
    useEffect(() => {
      return navigate("/login");
    }, []);
  }

  return <>feed page</>;
};

export default Feed;
