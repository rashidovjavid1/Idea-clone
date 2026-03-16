"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { ourPartners } from "../constants/ourPartners";

export default () => {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        stopOnLastSlide: true,
        waitForTransition: false,
      }}
      speed={3000}
      spaceBetween={30}
      slidesPerView={6}
    >
      {ourPartners.map((item, index) => (
        <SwiperSlide key={index} className="swiperElement">
          <img src={item} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
