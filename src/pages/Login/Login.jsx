import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AllServiceContext } from "../../context/AuthProvider";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [isLogIn, SetIsLogin] = useState(true);
  const { setAuth } = useContext(AllServiceContext);

  const { googleSignIn, authUser } = useFirebase();
  setAuth(authUser);

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
            </div>
          ) : (
            <div className="top-form-header">
              <h3>Create an Account </h3>
              <p>Welcome Register form Account.</p>
            </div>
          )}

          <form action="">
            {!isLogIn && (
              <>
                <input
                  className="form-control"
                  type="name"
                  name="name"
                  id=""
                  placeholder="Write your name..."
                />{" "}
                <br />
              </>
            )}
            <input
              className="form-control"
              type="email"
              name="email"
              id=""
              placeholder="email"
            />{" "}
            <br />
            <input
              className="form-control"
              type="password"
              name="password"
              id=""
              placeholder="Write your password"
            />{" "}
            <br />
            {!isLogIn && (
              <>
                <input
                  className="form-control"
                  type="conPass"
                  name="conPass"
                  id=""
                  placeholder="Write your confirm password"
                />{" "}
                <br />
              </>
            )}
            <input
              style={{ width: "30px" }}
              type="checkbox"
              name="checkbox"
              id=""
            />{" "}
            <span>Show PassWord</span>
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
