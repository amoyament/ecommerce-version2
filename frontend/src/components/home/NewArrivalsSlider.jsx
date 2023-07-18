// Import react and built in slider
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewArrivalsSlider.css";

const NewArrivalsSlider = () => {
  //Set configurations for slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",
    swipe: true,
    swipeToSlide: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="../photos/slide1.webp" alt="Ali's Set: Plaid blazer and slacks set." />
        </div>
        <div>
          <img
            src="../photos/slide2.webp"
            alt="Jennifer's Skirt: Dark green skirt with gold buttons."
          />
        </div>
        <div>
          <img src="../photos/slide3.webp" alt="Jennifer's Set: Mustard blazer and slacks set" />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivalsSlider;
