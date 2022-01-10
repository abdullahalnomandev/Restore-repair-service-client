import React from "react";
import useAsync from "../../../hooks/useAsync";
import { repairServices } from "../../../services/repairServices";
import ServicesDetails from "./ServicesDetails";

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
          <ServicesDetails service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
