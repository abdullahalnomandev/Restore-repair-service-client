import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import ServiceSkeleton from "../../../skeletons/ServiceSkeleton";
import ServicesDetails from "./ServicesDetails";

const Services = ({ services }) => {
  // ..
  AOS.init();
  //GET REQUEST

  return (
    <div id="services" className="container services">
      <div data-aos="fade-up" className="service-header text-center">
        <h2>Our Repair Services</h2>
        <p className="text-secondary">
          Any kinds of digital device problem you need fixed. We can help! Check
          out our digital device repair services to find more information of
          what exactly we provide and if it suites your needs.
        </p>
      </div>
      {!services?.length && <ServiceSkeleton />}
      <div className="row">
        {services?.map((service) => (
          <ServicesDetails service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
