const UserCard = ({ user }) => {
  return (
    <div className="flex    max-w-[20vw]  ">
      <div className="card bg-base-300 w-96 shadow-xl rounded-2xl mt-4 max-h-[60vh] overscroll-hidden">
        <figure className="w-full min-h-[30vh]">
          <div className="h-48 w-full ">
            <img
              src={
                user.photoUrl ||
                "https://cdn.pixabay.com/photo/2025/01/17/16/06/building-9340309_1280.jpg"
              }
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
        </figure>
        <div className="card-body  p-4 max-h-[30vh] line-clamp-4">
          <h2 className="card-title">
            {(user?.firstName || "firstName") +
              " " +
              (user?.lastName || "lastName")}
          </h2>
          <p>{(user?.age || "Age: ") + " | " + (user?.gender || "Gender: ")}</p>
          <p>{user?.about}</p>
          <p className="w-full  text-ellipsis whitespace-nowrap">
            Skills: {user?.skill}
          </p>
          <div className="card-actions flex flex-row justify-between  mt-[1vh]">
            <button className="btn btn-error">Ignore</button>
            <button className="btn btn-primary py-2">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
