import React from 'react'
import Slider from "react-slick";
import d1 from "../../assets/images/d1.png"
import d2 from "../../assets/images/d2.jpeg"
import d4 from "../../assets/images/d4.jpeg"
import d5 from "../../assets/images/d5.jpeg"

import './header.css'

const Header = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 8000,
        cssEase: "linear"
      };
  return (
    <div className='header'>
        <div>
        <Slider {...settings}>
          <div className='slider-container'>
            <div className='slider-image'>
            <div className='background-opacity'></div>
                <img src={d4} alt="slider-pic" />
            </div>
            <div className="header-title">
                <h1>Turning Ambitions into Realities</h1>
                <p>Discover the power of financial inclusion with Rayyan bank. Your dreams are our priority.</p>
            </div>
          </div>
          <div className='slider-container'>
            <div className='slider-image'>
            <div className='background-opacity'></div>
                <img src={d2} alt="slider-pic" style={{transform: 'scaleX(-1)'}} />
            </div>
            <div className="header-title">
                <h1>Turning Ambitions into Realities</h1>
                <p>Discover the power of financial inclusion with Rayyan bank. Your dreams are our priority.</p>
            </div>
          </div>
          <div className='slider-container'>
            <div className='slider-image'>
            <div className='background-opacity'></div>
                <img style={{transform: 'scaleX(-1)'}} src={d5} alt="slider-pic" />
            </div>
            <div className="header-title">
                <h1>Turning Ambitions into Realities</h1>
                <p>Discover the power of financial inclusion with Rayyan bank. Your dreams are our priority.</p>
            </div>
          </div>
         
        </Slider>
      </div>
    </div> 
  )
}

export default Header