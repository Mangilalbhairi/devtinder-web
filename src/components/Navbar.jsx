import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { removeRequest } from "../utils/requestSlice";
import { removeConnection } from "../utils/connectionSlice";
import { removeFeed } from "../utils/feedSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:7777/logout",
        {},
        { withCredentials: true }
      );

      dispatch(removeUser());
      dispatch(removeRequest());
      dispatch(removeConnection());
      dispatch(removeFeed());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="navbar bg-gray-900">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>

        <div className="flex gap-3  mx-4">
          <div>{user ? "Welcome " + user.firstName : ""}</div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user
                      ? user.photoUrl
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
                <Link to={"/requests"} className="justify-between">
                  requests
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to={"/login"}>login</Link>
              </li>
              <li>
                <Link to={"/connection"}>connection</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
