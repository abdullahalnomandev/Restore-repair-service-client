import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AllServiceContext } from "../../context/AuthProvider";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(true);
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();
  const [isLogIn, SetIsLogin] = useState(true);
  const { setAuth } = useContext(AllServiceContext);
  const {
    googleSignIn,
    authUser,
    registerUser,
    signInUser,
    errorMessage,
    successMessage,
  } = useFirebase();
  setAuth(authUser);
  const [error, setError] = useState("");

  const [signINuser, setSignUser] = useState({
    email: null,
    password: null,
    conPass: null,
    name: null,
  });
  // ERROR MESSAGE VALIDATION
  const handleBlur = (e) => {
    // setUser({ ...user, [e.target.name]: e.target.value });
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if (e.target.name === "conPass") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if (e.target.name === "name") {
      isFormValid = true;
    }

    if (isFormValid) {
      const newUserInfo = { ...signINuser };
      newUserInfo[e.target.name] = e.target.value;
      setSignUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    /// ERROR MESSAGE
    if (signINuser.password !== signINuser.conPass) {
      setError("Password don't match.Please enter the correct password.");
    }
    if (signINuser.password === signINuser.conPass) {
      setError("");
    }
    if (signINuser.password === null) {
      setError("Password should be 6 character and at least 1 number 1 string");
    }

    if (
      !isLogIn &&
      signINuser.password === signINuser.conPass &&
      signINuser.password !== null
    ) {
      // Create User
      registerUser(signINuser.email, signINuser.password, signINuser.name);
      console.log(signINuser.email, signINuser.password, signINuser.name);
    }
    if (isLogIn) {
      signInUser(signINuser.email, signINuser.password);
    }

    e.preventDefault();
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={() => {
          handleShow(false);
          navigate("/");
        }}
        animation={true}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {isLogIn === true ? (
            <div className="top-form-header">
              <h3>Login</h3>
              <p>Become part of out community.</p>
              <p className="red">{errorMessage}</p>
            </div>
          ) : (
            <div className="top-form-header">
              <h3>Create an Account </h3>
              <p>Welcome Register form Account.</p>
              {successMessage && (
                <h5 style={{ color: "green" }}>
                  Your Account Created Successfully..
                </h5>
              )}
              <p className="red">{error}</p>
              <p className="red">{errorMessage}</p>
            </div>
          )}

          <form action="" onSubmit={handleSubmit}>
            {!isLogIn && (
              <>
                <input
                  className="form-control"
                  type="name"
                  name="name"
                  onBlur={handleBlur}
                  id=""
                  placeholder="Write your name..."
                  required
                />{" "}
                <br />
              </>
            )}
            <input
              className="form-control"
              type="email"
              name="email"
              onBlur={handleBlur}
              id=""
              placeholder="email"
              required
            />{" "}
            <br />
            <input
              className="form-control"
              type={showPassword ? "password" : "text"}
              name="password"
              onBlur={handleBlur}
              id=""
              placeholder="Write your password"
            />{" "}
            <br />
            {!isLogIn && (
              <>
                <input
                  className="form-control"
                  name="conPass"
                  type={showPassword ? "password" : "text"}
                  onBlur={handleBlur}
                  id=""
                  placeholder="Write your confirm password"
                />{" "}
                <br />
              </>
            )}
            {!isLogIn && (
              <div>
                <input
                  style={{ width: "30px" }}
                  type="checkbox"
                  name="checkbox"
                  id=""
                  onChange={(e) => setShowPassword(!showPassword)}
                />
                <span>Show password</span>
              </div>
            )}
            <br />
            <button className="sub-secondary-button w-100 mt-4">
              {isLogIn ? "LogIn" : "Sign Up"}
            </button>
          </form>
          <div className="bottom-form">
            {isLogIn === true ? (
              <>
                <p className="text-center pt-3 ps-1">
                  Not a member ?{" "}
                  <Link
                    onClick={() => SetIsLogin(false)}
                    className="text-primary"
                    to="/login"
                  >
                    Sign UP
                  </Link>
                </p>
                <div className="google-button">
                  <button className="g-btn" onClick={() => googleSignIn()}>
                    <FcGoogle /> Sign In with google
                  </button>
                </div>
              </>
            ) : (
              <p className="text-center pt-3">
                Already a member ?{" "}
                <Link
                  onClick={() => SetIsLogin(true)}
                  className="text-primary"
                  to="/login"
                >
                  Sign In
                </Link>
              </p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
