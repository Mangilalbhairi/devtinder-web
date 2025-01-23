import { useSelector } from "react-redux";
const Profile = () => {
  const { user } = useSelector((store) => store.user);
  // console.log("userprofile",userProfile)

  return (
    <>
      <h1>userName: {user.firstName}</h1>
    </>
  );
};
export default Profile;
