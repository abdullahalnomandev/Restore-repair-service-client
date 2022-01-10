import React, { useContext } from "react";
import { AllServiceContext } from "../../../context/AuthProvider";

const Profile = () => {
  const { auth } = useContext(AllServiceContext);
  return (
    <div className="container">
      <div className="profile text-center">
        {!auth.image && (
          <img
            src="https://static.thenounproject.com/png/17241-200.png"
            alt=""
          />
        )}
        <img src={auth.image} alt="" />
        <h3 className="mt-2">{auth.name}</h3>
        <p>{auth.email}</p>
        <div className="mt-3 log-out">
          <button className="log-out">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
