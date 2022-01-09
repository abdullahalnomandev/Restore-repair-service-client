import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Exprience = () => {
  return (
    <div
      className="container-fluid row my-5"
      style={{ borderTop: "1px solid #ddd" }}
    >
      <div className="col-md-6 text-center">
        <img
          style={{ borderBottom: "7px solid #dd7a09" }}
          className="img-fluid h-75"
          src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/about-e1528309926880.jpg"
          alt=""
        />
      </div>
      <div className="col-md-6 p-3">
        <div className="header-content d-flex justify-content-center align-items-center">
          <div className="number">
            <h1 style={{ color: "#dd7a09", fontWidth: "600", fontSize: "69" }}>
              22
            </h1>
          </div>
          <div className="header">
            <h4>YEARS OF EXPERIENCE IN DIGITAL DEVICE REPAIR SERVICES</h4>
          </div>
        </div>
        <p className="text-secondary">
          Restore is a U.S based computer repair service center. Basically we
          repair all major brands of PCs, Laptops, Smartphone, Tablet and Gaming
          console devices issues. We provide the services by well trained,
          skillful and friendly stuff. Our skill have been tested over the
          years. We’re not only here to fix your device but also make sure you
          are informed and comfortable with the whole process. We’ll keep you
          updated and you feel comfortable with our services.
        </p>
        <h5 className="py-2">CALL US TO GET FREE QUOTES</h5>
        <div className="d-flex justify-content-center align-items-center gap-5">
          <div>
            <button
              style={{
                width: "162px",
                borderRadius: "46px",
                padding: "17px 0px",
              }}
              className="sub-secondary-button"
            >
              <BsFillTelephoneFill />
              123-456-789
            </button>
          </div>
          <div>
            <button
              style={{
                width: "162px",
                borderRadius: "46px",
                padding: "17px 0px",
              }}
              className="secondary-button"
            >
              24/7 Mon - Fri
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
