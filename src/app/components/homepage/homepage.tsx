"use client";
import React, { Fragment } from "react";
import classes from "./homepage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/bundle";
import News from "../news/news";

const HomePage = () => {
  return (
    <Fragment>
      <section>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className={classes["hero"]}>
              <img src="/hero/bullet-350-1.jpeg" alt="hero-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes["hero"]}>
              <img src="/hero/bullet-350-2.jpeg" alt="hero-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes["hero"]}>
              <img src="/hero/bullet-350-3.jpeg" alt="hero-image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <News></News>
    </Fragment>
  );
};

export default HomePage;
