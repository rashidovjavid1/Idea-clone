"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import styles from "./FilterTabs.module.scss";

const tabs = [
  { id: "all", label: "All", icon: null },
  {
    id: "education",
    label: "Education and Training",
    icon: "/icons/education.svg",
  },
];

export default function FilterTabs({ activeTab, onTabChange }) {
  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={true}
      slidesPerView="auto"
      spaceBetween={8}
      className={styles.swiper}
    >
      {tabs.map((tab) => (
        <SwiperSlide key={tab.id} className={styles.slide}>
          <button
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.icon && <img src={tab.icon} alt="" width={18} height={18} />}
            {tab.label}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
