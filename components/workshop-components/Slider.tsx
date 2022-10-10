import React from "react";
// Import Swiper React components
import { Navigation, Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles

import Image, { StaticImageData } from "next/image";

type Props = {
  one?: StaticImageData;
  two?: StaticImageData;
  three?: StaticImageData;
};

function Slider(props: Props) {
  const breakPoints = {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  };
  return (
    <Swiper
      breakpoints={breakPoints}
      modules={[Autoplay, FreeMode, Navigation, Pagination]}
      pagination={true}
      grabCursor={true}
      className="mySwiper relative w-full lg:w-11/12 mx-auto"
    >
      <SwiperSlide>
        <Image src={props.one!} alt="" width={375} height={520} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={props.two!} alt="" width={375} height={520} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={props.three!} alt="" width={375} height={520} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
