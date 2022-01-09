import React from "react";
import { Link } from "react-router-dom";
import useAsync from "../../../hooks/useAsync";
import { repairServices } from "../../../services/repairServices";

const Services = () => {
  //GET REQUEST
  const { data: services } = useAsync(repairServices.getProduct);

  return (
    <div className="container services ">
      <div className="service-header text-center">
        <h2>Our Repair Services</h2>
        <p className="text-secondary">
          Any kinds of digital device problem you need fixed. We can help! Check
          out our digital device repair services to find more information of
          what exactly we provide and if it suites your needs.
        </p>
      </div>
      <div className="row">
        {services?.map((service) => (
          <div key={service._id} className="col-md-6 pb-4">
            <div className="row service-card ms-2">
              <div className="col-md-4 image p-0">
                <img className="img-fluid" src={service.img} alt="" />
              </div>
              <div className="col-md-8 content p-3">
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <div className="d-flex gap-5 justify-content-center align-items-center">
                  <h5>Price: {service.price} </h5>
                  <Link to={`dashboard/book`}>
                    <button className="secondary-button">BOOK NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
