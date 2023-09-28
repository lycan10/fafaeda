import React, {useEffect, useState} from 'react'
import Slider from "react-slick";
import './testimonial.css'
import user1 from '../../assets/images/profile.png'


const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 500) {
          setSlidesToShow(2); // Large screen
        }  else {
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
    speed: 1000,
     slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear"

  };

  return (
    <div className='testimonials'>
      <div className="testimonial-container">
      <div className="testimonials-title-container">
         <div className="home-about-title">
            <div className="about-vertical"></div>
              <h1 style={{color: '#75C2F6'}}>Testimonials</h1>
            </div>
          <h2>What people have to say about us</h2>
      </div>
      <div className="testimonial-carousel">
      <Slider {...settings}>
        <div className="div-slider-space">
          <div className='testimonial-card'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className="testimonial-card-image-container">
              <div className="testimonial-card-image">
                <img src={user1} alt="" />
              </div>
              <div className="testimonial-card-author">
                <h1>Victor Madara</h1>
                <p>Volunteer</p>
              </div>
            </div>
          </div>
          </div>
          <div className="div-slider-space">
          <div className='testimonial-card'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className="testimonial-card-image-container">
              <div className="testimonial-card-image">
                <img src={user1} alt="" />
              </div>
              <div className="testimonial-card-author">
                <h1>Victor Madara</h1>
                <p>Volunteer</p>
              </div>
            </div>
          </div>
          </div>
          <div className="div-slider-space">
          <div className='testimonial-card'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className="testimonial-card-image-container">
              <div className="testimonial-card-image">
                <img src={user1} alt="" />
              </div>
              <div className="testimonial-card-author">
                <h1>Victor Madara</h1>
                <p>Volunteer</p>
              </div>
            </div>
          </div>
          </div>
          <div className="div-slider-space">
          <div className='testimonial-card'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            <div className="testimonial-card-image-container">
              <div className="testimonial-card-image">
                <img src={user1} alt="" />
              </div>
              <div className="testimonial-card-author">
                <h1>Victor Madara</h1>
                <p>Volunteer</p>
              </div>
            </div>
          </div>
          </div>
         
      </Slider>
      </div>
      </div>
    </div>
  )
}

export default Testimonial