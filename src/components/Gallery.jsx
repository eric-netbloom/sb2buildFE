import React from "react";
// import { useEffect, useState } from "react";
// import sanityClient from "../client.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import bannerImg from "../assets/images/sb2-gallery-02.webp";
import bannerImg2 from "../assets/images/sb2-build-hp-gal-01.webp";
import bannerImg3 from "../assets/images/sb2asap2.webp";

export default function Gallery() {

  return (
    <Swiper
        spaceBetween={0}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView='auto'
        loop={true}
        speed={40000}
        autoplay={{
            disableOnInteraction: false,
            delay: 1,
        }}
        modules={[Autoplay]}
        className="gallery-slider"
    >
        <SwiperSlide className="slide-item center">
            <img src={bannerImg} alt="Sb2 Build Banner" />
        </SwiperSlide>
        <SwiperSlide className="slide-item center">
            <img src={bannerImg2} alt="Sb2 Build Banner" />
        </SwiperSlide>
        <SwiperSlide className="slide-item center">
            <img src={bannerImg3} alt="Sb2 Build Banner" />
        </SwiperSlide>
    </Swiper>
  );
}