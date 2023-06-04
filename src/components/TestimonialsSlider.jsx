import React from "react";
import { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function AllTestimonials(showingPost = "all") {
  const [allTestimonialsData, setAllTestimonials] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "testimonial"]{
            title,
            position,
            clientTestimonial,
        }`
      )
      .then((data) => setAllTestimonials(data))
      .catch(console.error);
  }, []);

  return (
    <Swiper
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
            enabled: true,
            delay: 5000,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="testimonial-slider"
    >
        {allTestimonialsData &&
        allTestimonialsData.slice(0, showingPost === "limited" ? 3 : allTestimonialsData.length + 1).map((testimonial, index) => (
            <SwiperSlide key={index} className="slide-item-wrap center">
                <div className="slide-item">
                    <p> {testimonial.clientTestimonial} </p>
                    <h3> {testimonial.title} </h3>
                    <p> {testimonial.position} </p>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
  );
}