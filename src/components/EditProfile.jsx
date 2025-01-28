import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";
import UserCard from "./UserCard";

const EditProfile = () => {
  const { user } = useSelector((store) => store.user);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [skill, setSkill] = useState(user.skill);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);

  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();

  const handleProfile = async () => {
    try {
      const updateProfile = await axios.patch(
        "http://localhost:7777/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          skill,
          about,
        },
        { withCredentials: true }
      );
      if (updateProfile) {
        dispatch(addUser(updateProfile?.data?.result));
      }
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      if (err) {
        setError(err);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-row justify-center gap-5  min-h-[70vh] bg-base-200">
        <div className="w-full max-w-sm p-6 b rounded-2xl bg-base-300 2xl shadow-xl mt-4">
          <h2 className="text-2xl font-semibold text-center text-white">
            Edit Profile
          </h2>
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="mb-2">
              <label
                for="firstName"
                className="block text-sm font-medium text-white"
              >
                FirstName
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2  text-sm border rounded-lg shadow-sm focus:ring-1 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label
                for="lastName"
                className="block text-sm font-medium tex-white"
              >
                lastName
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label for="age" className="block text-sm font-medium text-white">
                Age
              </label>
              <input
                type="text"
                id="age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-2  text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label for="gender" className="block text-sm font-medium white">
                Gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2  text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label
                for="skill"
                className="block text-sm font-medium text-white"
              >
                Skill
              </label>
              <input
                type="text"
                id="skill"
                name="skill"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                className="w-full px-4 py-2  text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label
                for="skill"
                className="block text-sm font-medium text-white"
              >
                PhotoUrl
              </label>
              <input
                type="text"
                id="photoUrl"
                name="photoUrl"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="w-full px-4 py-2  text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label for="bio" className="block text-sm font-medium text-white">
                About
              </label>
              <textarea
                id="about"
                name="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                rows="3"
                className="w-full px-4 py-2  text-sm border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              onClick={handleProfile}
              className="w-full px-4 py-2 mt-2 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              update Profile
            </button>
          </form>
        </div>
        <UserCard
          user={{ firstName, lastName, gender, age, skill, about, photoUrl }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>New mail arrived.</span>
          </div>
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
