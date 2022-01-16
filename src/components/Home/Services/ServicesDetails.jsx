import AOS from "aos";
import "aos/dist/aos.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllServiceContext } from "../../../context/AuthProvider";

const ServicesDetails = ({ service }) => {
  AOS.init({ duration: 1000 });

  const { setSelectedServices } = useContext(AllServiceContext);
  const { img, price, name, description } = service;
  return (
    <div className="col-md-6 pb-4" data-aos="flip-left">
      <div className="row service-card ms-2">
        <div className="col-md-4 image p-0">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-md-8 content p-3">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="d-flex gap-5 justify-content-center align-items-center">
            <h5>Price: {price} </h5>
            <Link to={`dashboard/book`}>
              <button
                className="secondary-button"
                onClick={() => setSelectedServices(service)}
              >
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
