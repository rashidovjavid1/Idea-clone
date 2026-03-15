"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { ourPartners } from "../constants/ourPartners";

export default () => {
  return (
    <Swiper
      autoplay={2000}
      spaceBetween={60}
      slidesPerView={6}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {ourPartners.map((item, index) => (
        <SwiperSlide key={index} className="swiperElement">
          <img src={item} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
