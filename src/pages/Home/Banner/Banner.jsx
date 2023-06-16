import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://img.freepik.com/free-psd/horizontal-banner-template-basketball-with-male-player_23-2149024716.jpg?w=1060&t=st=1686921799~exp=1686922399~hmac=ed90d61276b4a019a1d75a1e20455edc98a96ed6d5d56203284359e561fa48c0"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://img.freepik.com/free-psd/horizontal-banner-template-basketball-with-male-player_23-2149024718.jpg?w=1060&t=st=1686922953~exp=1686923553~hmac=31270814460080a158bba5e17e4f11bb8a0541cc3b7a46c6ecbdadb72236d417"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full "
              src="https://img.freepik.com/free-psd/horizontal-banner-template-basketball-with-male-player_23-2149024720.jpg?w=1060&t=st=1686927370~exp=1686927970~hmac=54e9fffc67063c99064c91e50407ff58040fea2fe5d306de20fd88cefdeda9ea"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;
