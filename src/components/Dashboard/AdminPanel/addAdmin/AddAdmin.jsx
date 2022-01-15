import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { GrUserAdmin } from "react-icons/gr";
import { manageAdmin } from "../../../../services/manageAdmin";

const AddAdmin = (e) => {
  const [admin, setAdmin] = useState("");

  const handleAddAdmin = () => {
    if (!admin || admin === null || admin === " ") {
      alert("Please enter right email..");
    } else {
      console.log({ role: "admin", email: admin });
      manageAdmin.postAdmin({ role: "admin", email: admin }).then((res) => {
        if (res) {
          alert("Admin Added successfull..");
        }
      });
      setAdmin("");
    }
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(at center top, rgb(246 147 35), transparent)",
        minHeight: "100vh",
      }}
    >
      <h4 className="text-center pt-5">
        Add Admin <GrUserAdmin />
      </h4>
      ;
      <div
        className="container pt-3"
        style={{ maxWidth: "450px", margin: "auto" }}
      >
        <InputGroup className="mb-3 text-center">
          <FormControl
            placeholder="Write Admin email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            type="email"
            value={admin}
            onChange={(e) => setAdmin(e.target.value)}
            required
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleAddAdmin}
          >
            Add Admin
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default AddAdmin;
