"use client";

import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
//import './../css/layout.css';
import "./../css/carrusel.css";

async function loadCarrusel() {
  const res = await fetch("http://localhost:3000/api/carrusel", {
    cache: "no-store",
  });
  const data = await res.json();
  //console.log(data)
  return data;
}

async function Carrusel() {
  const carrusel = await loadCarrusel();
  return (
    <div className="carrusel">
      <Swiper
        modules={[ Pagination, Autoplay, A11y]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={100}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {carrusel.map((carrusel) => (
          <SwiperSlide key={carrusel.id}>
            <img src={carrusel.arte} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Carrusel;
