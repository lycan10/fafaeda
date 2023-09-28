import React from 'react'
import image from '../../assets/images/d1.png'
import image1 from '../../assets/images/d4.jpeg'
import image2 from '../../assets/images/d2.jpeg'
import image3 from '../../assets/images/d5.jpeg'
import Slider from "react-slick";

import './card.css'


const Card = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 8000,
        cssEase: "linear"
      };
  return (
    <div className="home-card">
        <div>
        <Slider {...settings}>
            <div className="home-card-container">
                <div className="home-card-image">
                    <img src={image} alt="card" />
                    <div className="home-card-image-title">
                        <p>Abuse</p>
                    </div>
                </div>
                <div className="home-card-content">
                    <h1>Promoting the rights of women</h1>
                    <p>It is a long established fact that a reader will be distracted by content of a page when</p>
                </div>
                <div className="home-card-footer" style={{height:'30px', width:"100%", color:'red'}}>
                            
                </div>
            </div>
            <div className="home-card-container">
                <div className="home-card-image">
                    <img src={image} alt="card" />
                    <div className="home-card-image-title">
                        <p>Abuse</p>
                    </div>
                </div>
                <div className="home-card-content">
                    <h1>Promoting the rights of women</h1>
                    <p>It is a long established fact that a reader will be distracted by content of a page when</p>
                </div>
                <div className="home-card-footer" style={{height:'30px', width:"100%", color:'red'}}>
                            
                </div>
            </div>
            <div className="home-card-container">
                <div className="home-card-image">
                    <img src={image} alt="card" />
                    <div className="home-card-image-title">
                        <p>Abuse</p>
                    </div>
                </div>
                <div className="home-card-content">
                    <h1>Promoting the rights of women</h1>
                    <p>It is a long established fact that a reader will be distracted by content of a page when</p>
                </div>
                <div className="home-card-footer" style={{height:'30px', width:"100%", color:'red'}}>
                            
                </div>
            </div>
            <div className="home-card-container">
                <div className="home-card-image">
                    <img src={image} alt="card" />
                    <div className="home-card-image-title">
                        <p>Abuse</p>
                    </div>
                </div>
                <div className="home-card-content">
                    <h1>Promoting the rights of women</h1>
                    <p>It is a long established fact that a reader will be distracted by content of a page when</p>
                </div>
                <div className="home-card-footer" style={{height:'30px', width:"100%", color:'red'}}>
                            
                </div>
            </div>
         
        </Slider>
        </div>
    </div>
  )
}

export default Card