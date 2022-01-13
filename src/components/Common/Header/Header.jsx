import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { BsFillPhoneFill, BsStopwatch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
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

      <div className="bottom-navbar" style={{ background: "#333333" }}>
        <Navbar expand="lg" className="container">
          <Navbar.Toggle aria-controls="navbarScroll " />
          <Navbar.Collapse id="navbarScroll text-center ">
            <div className="text-center">
              <Nav className="me-auto my-lg-0 nav-item ">
                <Nav.Link as={Link} to="/action" href="#action2">
                  ABOUT US
                </Nav.Link>
                <Nav.Link href="#action2">SERVICES</Nav.Link>
                <Nav.Link href="#action2">GALLERY</Nav.Link>
                <Nav.Link as={Link} to="/dashboard/addService">
                  Dashboard
                </Nav.Link>

                <div className="dropDown">
                  <NavDropdown title="LOGIN" id="basic-nav-dropdown">
                    <Nav.Link href="/login">CONTRACT</Nav.Link>
                  </NavDropdown>
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
