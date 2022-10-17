import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style/women/slidingnew.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export const Slidingnew = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" col ">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11724/getimg/?img=%2Fbanner%2F20220504-modesens-Oluxury-1140x400.jpg"
                alt=""
              />
            </div>
            <div
              className="texts col1"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>You Can Have Stunning New Arrivals</h1>
              <b>Use code MODESENS30 for 30% off</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11682/getimg/?img=%2Fbanner%2F20220427LengJing-modesens1140x400.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>Activewere Brands I Love</h1>
              <b>The Best Workout Clothers for Women in 2022</b>
              <br />
              <a href="">Read Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11726/getimg/?img=%2Fbanner%2F20220502-modesens-Mothersday-1140x400.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", zIndex: "2", bottom: "0" }}
            >
              <h1>The Perfect Present is Here</h1>
              <b>Shop this extraordinary Mother's Day Edit</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col ">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11648/getimg/?img=%2Fbanner%2F20220426-modesens-StatementSandal-1140x400-F.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", zIndex: "2", bottom: "0" }}
            >
              <h1>Always Be a Step Ahead</h1>
              <b>Shop statement-making sandals</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="https://modesens.com/banner/11585/getimg/?img=%2Fbanner%2F20220419-modesens-cutout-1140x400-F.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", zIndex: "2", bottom: "0" }}
            >
              <h1>Always Trend: Cut-Outs</h1>
              <b>An elevated way to show some skin</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col">
            <div
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <img
                style={{ height: "100%", width: "100%", margin: "auto" }}
                src="https://modesens.com/banner/11754/getimg/?img=%2Fbanner%2F20220506-modesens-Harrods-1140x400-F.jpg"
                alt=""
              />
            </div>

            <div
              className="texts"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>Let's Shop at Harrods this Weekend</h1>
              <b>Rewards members get a special 10% off</b>
              <br />
              <a href="">Shop Now</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
