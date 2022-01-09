// import Swiper core and required modules
import Rating from "@mui/material/Rating";
import SwiperCore, { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Pagination]);

const Testimonials = () => {
  const clients = [
    {
      name: "Abdullah Al Noman",
      img: "https://i.ibb.co/jLk5rtx/jpg.jpg",
      star: "4",
      content:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non   maiores reiciendis sed totam. Laborum!     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nonmaiores reiciendis sed totam. Laborum!",
      email: "noman@gmail.com",
    },
    {
      name: "Abdullah ",
      img: "https://i.ibb.co/jLk5rtx/jpg.jpg",
      star: "5",
      content:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non   maiores reiciendis sed totam. Laborum!     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nonmaiores reiciendis sed totam. Laborum!",
      email: "noman@gmail.com",
    },
    {
      name: " Noman",
      img: "https://i.ibb.co/jLk5rtx/jpg.jpg",
      star: "5",
      content:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non   maiores reiciendis sed totam. Laborum!     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nonmaiores reiciendis sed totam. Laborum!",
      email: "noman@gmail.com",
    },
    {
      name: "Abdullah Al Noman",
      img: "https://i.ibb.co/jLk5rtx/jpg.jpg",
      star: 5,
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non   maiores reiciendis sed totam. Laborum!     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nonmaiores reiciendis sed totam. Laborum!",
      email: "noman@gmail.com",
    },
    {
      name: "Abdullah ",
      img: "https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/team_7-1.jpg",
      star: 2,
      content:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non   maiores reiciendis sed totam. Laborum!     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nonmaiores reiciendis sed totam. Laborum!",
      email: "noman@gmail.com",
    },
    {
      name: " Noman",
      img: "https://i.ibb.co/jLk5rtx/jpg.jpg",
      star: 4,
      content:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non   maiores reiciendis sed totam. Laborum!     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nonmaiores reiciendis sed totam. Laborum!",
      email: "noman@gmail.com",
    },
  ];

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
          {clients.map((client) => (
            <SwiperSlide
              style={{
                backgroundColor: "rgb(247 247 247)",
                borderRadius: "5px",
              }}
            >
              <div className="testimonial-content col-md-12">
                <div className="">
                  <img src={client.img} alt="" />
                </div>
                <div className="content text-center test-content">
                  <div className="review-header">
                    <h6>{client.name}</h6>
                    <Rating defaultValue={client.star} />
                    <b>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus modi, repudiandae veniam nesciunt, dolorum
                    </b>
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
