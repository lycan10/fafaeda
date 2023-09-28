import React, {useState, useEffect} from 'react'
import Card from '../../constants/cards/Card'
import './homecauses.css'
import image from '../../assets/images/d1.png'
import image1 from '../../assets/images/d4.jpeg'
import image2 from '../../assets/images/d2.jpeg'
import image3 from '../../assets/images/d5.jpeg'
import Slider from "react-slick";

const HomeCauses = () => {
    const [slidesToShow, setSlidesToShow] = useState(2);

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 1200) {
          setSlidesToShow(3); // Large screen
        }  else if (window.innerWidth >= 500) {
            setSlidesToShow(2); // Large screen
          } 
        else {
          setSlidesToShow(1); // Small screen
        }
      };
  
      // Initial setup
      handleResize();
  
      // Listen for window resize events
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 8000,
        cssEase: "linear"
      };
  return (
    <div className='home-causes'>
        <div className="home-causes-container">
            <div className="home-causes-top">
            <div className="home-causes-header">
                <div className="home-causes-title">
                    <div className="about-vertical"></div>
                    <h1>Latest Causes</h1>
                </div>
                <h1>Find the popular cause and donate them</h1>
                </div>
            </div>
            <div className="home-causes-bottom">
            <div className="home-card">
        <div>
        <Slider {...settings}>
            <div className="div-slider-space">
                <div className="card-container">
                    <div className="card-image">
                        <img src={image} alt="card" />
                        <div className="card-image-title">
                            <p>Abuse</p>
                        </div>
                    </div>
                    <div className="card-content">
                        <h1>Promoting the rights of women</h1>
                        <p>It is a long established fact that a reader will be distracted by content of a page when</p>
                    </div>
                    <div className="home-card-footer" >
                                
                    </div>
                </div>
            </div>
            <div className="div-slider-space">
                <div className="card-container">
                    <div className="card-image">
                        <img src={image} alt="card" />
                        <div className="card-image-title">
                            <p>Abuse</p>
                        </div>
                    </div>
                    <div className="card-content">
                        <h1>Promoting the rights of women</h1>
                        <p>It is a long established fact that a reader will be distracted by content of a page when</p>
                    </div>
                    <div className="home-card-footer" >
                                
                    </div>
                </div>
            </div>
            <div className="div-slider-space">
            <div className="card-container">
                <div className="card-image">
                    <img src={image2} alt="card" />
                    <div className="card-image-title">
                        <p>Violence</p>
                    </div>
                </div>
                <div className="card-content">
                    <h1>Promoting the rights of women</h1>
                    <p>It is a long established fact that a reader will be distracted by content of a page when</p>
                </div>
                <div className="home-card-footer" >
                            
                </div>
            </div>
            </div>
            <div className="div-slider-space">
            <div className="card-container">
                <div className="card-image">
                    <img src={image3} alt="card" />
                    <div className="card-image-title">
                        <p>Rape</p>
                    </div>
                </div>
                <div className="card-content">
                    <h1>Promoting the rights of women</h1>
                    <p>It is a long established fact that a reader will be distracted by content of a page when</p>
                </div>
                <div className="home-card-footer" >
                            
                </div>
            </div>
            </div>
            <div className="div-slider-space">
            <div className="card-container">
                <div className="card-image">
                    <img src={image2} alt="card" />
                    <div className="card-image-title">
                        <p>Violence</p>
                    </div>
                </div>
                <div className="card-content">
                    <h1>Promoting the rights of women</h1>
                    <p>It is a long established fact that a reader will be distracted by content of a page when</p>
                </div>
                <div className="home-card-footer" >
                            
                </div>
            </div>
            </div>
        </Slider>
        </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCauses