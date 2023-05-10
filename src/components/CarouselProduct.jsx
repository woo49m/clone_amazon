import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

function CarouselProduct() {
  return (
    <div className=" bg-white m-3">
      <div className=" text-2xl font-semibold p-3">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={5}
        navigation={true}
        modules={[Navigation]}
        className="p-3"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide className=" p-5">
            <Link to={`./product/${i}`}>
              <img
                className="h-[150px] m-auto"
                src={`../images/product_${i}_small.jpg`}
              ></img>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselProduct;
