import AOS from "aos";
import "aos/dist/aos.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllServiceContext } from "../../../context/AuthProvider";
import useFirebase from "../../../hooks/useFirebase";

const Profile = () => {
  const { auth } = useContext(AllServiceContext);
  const { logOut } = useFirebase();
  AOS.init({ duration: 1500 });

  return (
    <div className="container" data-aos="flip-up">
      <div className="profile text-center">
        {!auth.image && (
          <img
            src="https://static.thenounproject.com/png/17241-200.png"
            alt=""
          />
        )}
        {auth.image && <img src={auth.image} alt="" />}

        <h3 className="mt-2">{auth.name}</h3>
        <p>{auth.email}</p>
        <div className="mt-3 log-out">
          <Link to="/">
            <button className="log-out" onClick={logOut}>
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
