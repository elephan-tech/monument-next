import React from "react";
import SliderWrapper from "react-slick";

const Slider = ({
  dots = true,
  infinite = true,
  speed = 500,
  slidesToShow = 1,
  slidesToScroll = 1,
  items = [],
}) => {
  const settings = {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
  };
  return (
    <SliderWrapper {...settings}>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </SliderWrapper>
  );
};

export default Slider;
