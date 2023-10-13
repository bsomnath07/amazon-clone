import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {Link} from "react-router-dom"
const CarouselProduct = () => {
  return (
    <div className="bg-white m-3">
    <div className="text-2xl font-semibold p-3"> Best sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
          <Link to={`/product/${i}`}>
          <img src={`../images/product_${i}_small.jpg`} alt="abc"/>
          </Link>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
