import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

function Carousel() {
  return (
    <div className=" h-[400px] w-[100%] bg-amazonclone-background relative ">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className=" h-[70%]"
      >
        <SwiperSlide>
          <img src=" ../images/carousel_1.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src=" ../images/carousel_2.jpg"></img>
        </SwiperSlide>
        <SwiperSlide className=" bg-stone-900">
          <video
            className=" h-[100%] object-cover"
            loop="loop"
            autoplay="true"
            muted="muted"
          >
            <source
              src={"../images/carousel_vid.mp4"}
              type="video/mp4"
            ></source>
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src=" ../images/carousel_4.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src=" ../images/carousel_5.jpg"></img>
        </SwiperSlide>
      </Swiper>
      <div className="absolute h-[25%] w-[100%] bg-gradient-to-t from-black to-transparent bottom-[30%] z-20 "></div>
      <div className=" h-[30%] w-[100%] bg-gradient-to-b from-black  to-transparent bottom-[40%] "></div>
    </div>
  );
}

export default Carousel;
