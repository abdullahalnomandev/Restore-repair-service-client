// import Swiper core and required modules
import Rating from "@mui/material/Rating";
import SwiperCore, { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useAsync from "../../../hooks/useAsync";
import { clientsReview } from "../../../services/reviewItems";

// install Swiper modules
SwiperCore.use([Pagination]);

const Testimonials = () => {
  const { data: reviews } = useAsync(clientsReview.getReview);
  console.log("data", reviews);

  return (
    <div className="container-fluid row testimonial">
      <div className="testimonial-header text-center">
        <h2>CLIENT TESTIMONIALS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non
          maiores reiciendis sed totam. Laborum!
        </p>
      </div>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {reviews?.map((client) => (
            <SwiperSlide
              style={{
                backgroundColor: "rgb(247 247 247)",
                borderRadius: "5px",
              }}
            >
              <div className="testimonial-content col-md-12">
                <div className="">
                  <img src={client.image} alt="" />
                </div>
                <div className="content text-center test-content">
                  <div className="review-header">
                    <h6>{client.name}</h6>
                    <Rating defaultValue={client.review} />
                    <b>{client.description}</b>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonials;
