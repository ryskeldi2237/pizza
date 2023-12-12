import React from "react";
import Slider from "react-slick";
export default function Main({ sliders, test }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      {sliders.map((item) => (
        <div className="main" key={item.id}>
          <img src={item.imageUrl}></img>
        </div>
      ))}
    </Slider>
  );
}
