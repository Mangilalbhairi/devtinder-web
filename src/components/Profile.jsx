import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import UserCard from "./UserCard";
const Profile = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <>
      <EditProfile />
    </>
  );
};
export default Profile;
