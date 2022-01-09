import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000} style={{ height: "40%" }}>
        <img
          className="d-block w-100 img-fluid "
          src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/home_1_slider_1-e1527970919620.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carosal-item">
            <h1>Fast Repair Service</h1>
            <p>
              Just send your valuable Laptop, PC, Mobile, Gaming Device or
              Smartphone and we'll take care of it. <br />
              We'll happy to serve our best to you, just keep faith on us
            </p>
            <button className="sub-secondary-button">
              Get Started Now
            </button>{" "}
            <button className="secondary-button">Learn More</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{ height: "40%" }}>
        <img
          className="d-block w-100 img-fluid"
          src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/home_1_slider_2-e1527970968543.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="carosal-item">
            <h1>Computer Repair</h1>
            <p>
              Just send your valuable Laptop, PC, Mobile, Gaming Device or
              Smartphone and we'll take care of it. <br />
              We'll happy to serve our best to you, just keep faith on us
            </p>
            <button className="sub-secondary-button">
              Get Started Now
            </button>{" "}
            <button className="secondary-button">Learn More</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
