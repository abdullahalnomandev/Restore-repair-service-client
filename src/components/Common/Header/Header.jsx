import React, { useContext, useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { BsFillPhoneFill, BsStopwatch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AllServiceContext } from "../../../context/AuthProvider";
import useFirebase from "../../../hooks/useFirebase";

const Header = () => {
  const { auth } = useContext(AllServiceContext);
  const { authUser, logOut } = useFirebase();
  const [fixedNav, setFixedNav] = useState(false);
  const fixedNavBar = () => {
    if (window.scrollY >= 250) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };
  window.addEventListener("scroll", fixedNavBar);

  return (
    <section>
      <div className="container main">
        <div className="top-header">
          <div className="row py-4 ">
            <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
              <img
                src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2017/01/logo.png"
                alt=""
              />
            </div>
            <div className="col-md-2 d-none d-lg-block  ">
              <div className="div row">
                <div className="icon col-md-2 ">
                  <AiFillHome />
                </div>
                <div className="content col-md-10 ">
                  <p>Visit Us </p>
                  <h5>25, Zee Street, TX</h5>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-none d-lg-block">
              <div className="row">
                <div className="icon col-md-2 ">
                  <BsFillPhoneFill />
                </div>
                <div className="content col-md-10 ">
                  <p>Call Now </p>
                  <h5>+88 01741581512</h5>
                </div>
              </div>
            </div>
            <div className="col-md-2 d-none d-lg-block">
              <div className="row">
                <div className="icon col-md-2 ">
                  <BsStopwatch />
                </div>
                <div className="content col-md-10 ">
                  <p>Mon - Sat</p>
                  <h5> 9.00 - 18.00</h5>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-3 d-none d-lg-block text-center">
              <button className="main-button">Get Free quire</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={fixedNav ? "bottom-navbar fixed-top" : "bottom-navbar"}
        style={{ background: "#333333" }}
      >
        <Navbar expand="lg" className="container">
          <Navbar.Toggle aria-controls="navbarScroll " />
          <Navbar.Collapse id="navbarScroll text-center ">
            <div className="text-center">
              <Nav className="me-auto my-lg-0 nav-item ">
                <Nav.Link href="#services">SERVICES</Nav.Link>
                <Nav.Link href="#gallery">GALLERY</Nav.Link>
                <Nav.Link href="#review">REVIEW </Nav.Link>
                <Nav.Link href="#team"> TEAM</Nav.Link>
                <Nav.Link href="#contract">CONTRACT</Nav.Link>
                <Nav.Link as={Link} to="/dashboard/chart">
                  DASHBOARD
                </Nav.Link>
                <div className="dropDown">
                  {authUser?.email ? (
                    <NavDropdown
                      title={
                        auth?.image ? (
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "100%",
                              backgroundColor: "white !important",
                            }}
                            src={auth?.image}
                            alt=""
                          />
                        ) : (
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "100%",
                              backgroundColor: "white !important",
                            }}
                            src="https://static.thenounproject.com/png/17241-200.png"
                            alt=""
                          />
                        )
                      }
                      id="basic-nav-dropdown"
                    >
                      <h6 className="text-center">{auth?.name}</h6>

                      <div className="text-center">
                        <Link to="/dashboard/profile">
                          <button className="btn btn-warning px-2 py-1">
                            View my profile
                          </button>
                        </Link>

                        <br />
                        <br />
                        <button
                          className="btn btn-danger px-1 py-0"
                          onClick={logOut}
                        >
                          Log Out
                        </button>
                      </div>
                    </NavDropdown>
                  ) : (
                    <Link to="/dashboard/profile">
                      <button className="btn btn-warning">Login</button>
                    </Link>
                  )}
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </section>
  );
};

export default Header;
