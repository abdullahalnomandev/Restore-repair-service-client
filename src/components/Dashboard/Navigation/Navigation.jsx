import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = ({ handleShow }) => {
  return (
    <div>
      <Navbar className="mb-2" style={{ boxShadow: "20px 20px 26px #ddd" }}>
        <Container>
          <Navbar.Brand href="#home">
            <AiOutlineMenu style={{ fontSize: "35px" }} onClick={handleShow} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
