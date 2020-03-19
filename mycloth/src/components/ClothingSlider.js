import React from "react";
import Slider from "react-slick";
import DRESS1 from '../img/DRESS1.jpg';
import DRESS2 from '../img/DRESS2.jpg';
import DRESS3 from '../img/DRESS3.jpg';
import DRESS4 from '../img/DRESS4.jpg';
import DRESS5 from '../img/DRESS5.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
class ClothingSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      focuseOnSelect: false
      
    
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={DRESS1} className="picture"/>
        </div>
        <div>
          <img src={DRESS2} className="picture"/>
        </div>
        <div>
          <img src={DRESS3} className="picture"/>
        </div>
        <div>
          <img src={DRESS4} className="picture"/>
        </div>
        <div>
          <img src={DRESS5} className="picture"/>
        </div>
      </Slider>
    );
  }
}

export default ClothingSlider;