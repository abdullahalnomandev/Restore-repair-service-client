import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([EffectCoverflow, Pagination]);

const Gallery = () => {
  return (
    <div id="gallery">
      <div className="service-header text-center ">
        <h2>Our Repair Gallery</h2>
        <p className="text-secondary">
          Glance over of our photo gallery so that you can get a brief idea of
          our activities. Also you ’ <br /> ll notice some reasons that why our
          customers love us. So try us yourself!
        </p>
      </div>
      <div className="mb-5 gallery">
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
          <SwiperSlide>
            <img
              src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/gallery_5.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/gallery_1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/gallery_6.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJboScULdkSJi8QUXpLPSoSpe6U9Bx1qNbw&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://image.shutterstock.com/image-photo/computer-repair-upgrade-260nw-717433255.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://image.shutterstock.com/image-photo/male-hands-repairing-computer-details-260nw-426800554.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/gallery_2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/gallery_5.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/gallery_1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/gallery_6.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJboScULdkSJi8QUXpLPSoSpe6U9Bx1qNbw&usqp=CAU"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://image.shutterstock.com/image-photo/computer-repair-upgrade-260nw-717433255.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://image.shutterstock.com/image-photo/male-hands-repairing-computer-details-260nw-426800554.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/gallery_2.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
