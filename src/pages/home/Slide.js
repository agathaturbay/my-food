import React from "react";
import Slider from "infinite-react-carousel";
import pavlova from '../../assets/pavlova.jpg'
import soup from '../../assets/soup.jpg'
import poke from '../../assets/poke.jpg'

import "../css/Slides.scss";

function Slide() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: "slide_box",
    dots: true,
    virtualList: true,
    duration: 20,
    arrows:true,
    
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slide_container">
          <img
            src={pavlova}
            className="slide_img"
            alt="Responsive img"
          />  
        </div>
        <div className="slide_container">
          <img
            src={soup}
            className="slide_img"
            alt="Responsive img"
          />    
        </div>
        <div className="slide_container">
          <img
            src={poke}
            className="slide_img"
            alt="Responsive img"
          />
          
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
