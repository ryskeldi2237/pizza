import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
export default function Main() {
  const sliders = useSelector((state) => state.item.items[5]);
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
      {sliders &&
        sliders.map((item) => (
          <div className="main" key={item.id}>
            <img src={item.imageUrl} alt={`slider`} />
          </div>
        ))}
    </Slider>
  );
}
