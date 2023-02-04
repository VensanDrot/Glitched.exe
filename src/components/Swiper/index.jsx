import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../Assets/Frag.gg.png";
import img2 from "../Assets/IT-Park.png";
import img3 from "../Assets/Major-Premium-Gaming.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const SwiperRes = (props) => {
  const changer = () => {
    if (props.width <= 1100) {
      return 1;
    } else {
      return 3;
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={changer()}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://frag.gg/" target="_blank" className="a_cont">
            <img src={img1} alt="" className="small" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://it-park.uz/ru/itpark" target="_blank" className="a_cont">
            <img src={img2} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.instagram.com/majorclub.uz/" target="_blank" className="a_cont">
            <img src={img3} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperRes;
