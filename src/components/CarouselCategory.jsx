import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useNavigate, createSearchParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

function CarouselCategory() {
  const navigate = useNavigate();

  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerms: "",
      })}`,
    });
  };

  return (
    <div className="bg-white m-3">
      <div className=" text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide
          className="hover: cursor-pointer"
          onClick={() => searchCategory("Deals")}
        >
          <img className="m-auto" src="../images/category_0.jpg"></img>
        </SwiperSlide>
        <SwiperSlide
          className="hover: cursor-pointer"
          onClick={() => searchCategory("Amazon")}
        >
          <img className="m-auto" src="../images/category_1.jpg"></img>
        </SwiperSlide>
        <SwiperSlide
          className="hover: cursor-pointer"
          onClick={() => searchCategory("Fashion")}
          s
        >
          <img className="m-auto" src="../images/category_2.jpg"></img>
        </SwiperSlide>
        <SwiperSlide
          className="hover: cursor-pointer"
          onClick={() => searchCategory("Computers")}
        >
          <img className="m-auto" src="../images/category_3.jpg"></img>
        </SwiperSlide>
        <SwiperSlide
          className="hover: cursor-pointer"
          onClick={() => searchCategory("Home")}
        >
          <img className="m-auto" src="../images/category_4.jpg"></img>
        </SwiperSlide>
        <SwiperSlide
          className="hover: cursor-pointer"
          onClick={() => searchCategory("Mobiles")}
        >
          <img className="m-auto" src="../images/category_5.jpg"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselCategory;
