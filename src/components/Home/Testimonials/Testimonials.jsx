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
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          <div className="row">
            {reviews?.map((client) => (
              <SwiperSlide
                style={{
                  backgroundColor: "rgb(247 247 247)",
                  borderRadius: "5px",
                }}
              >
                <div className="review-header">
                  <img className="w-25 text-center" src={client.image} alt="" />

                  <div className="review-content">
                    <div className="star">
                      <h6>{client.name}</h6>
                      <Rating defaultValue={client.review} />
                    </div>
                    <div className="description w-50">
                      <p>{client.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </>
    </div>
  );
};

export default Testimonials;
