import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  const data = [
    { img: "/img/imgHomePage/1.png", conten: "123", price: "100" },
    { img: "/img/imgHomePage/1.png", conten: "123", price: "100" },
    { img: "/img/imgHomePage/1.png", conten: "123", price: "100" },
    { img: "/img/imgHomePage/1.png", conten: "123", price: "100" },
    { img: "/img/imgHomePage/1.png", conten: "123", price: "100" },
  ];
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, key) => {
          return (
            <SwiperSlide className="card" key={key}>
              <div className="card_img">
                <img src={item.img}/>
              </div>
              <div className="card_text" style={{ width: "406.66px" }}>
                <div className="card_text1" style={{ textAlign: "left" }}>
                  {item.conten}
                </div>
                <div className="card_text2">{item.price}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
