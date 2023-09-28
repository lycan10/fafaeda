import React from 'react'
import './homegallery.css'
import { BsFillArrowRightCircleFill } from "react-icons/bs"

import pic5 from '../../assets/images/pic1.jpg'
import pic1 from '../../assets/images/pic2.jpg'
import pic2 from '../../assets/images/vol-banner.jpg'
import pic3 from '../../assets/images/d4.jpeg'
import pic4 from '../../assets/images/d2.jpeg'

const HomeGallery = () => {
  return (
    <div className="homegallery">
        <div className="homegallery-container">
            <div className="homegallery-title">
                <h3>Past Events</h3>
                <h1>We leave no stone unturned in pursuit of justice.</h1>
            </div>
            <div className="homegallery-image-container">
                <div className="homegallery-images gallery-image1">
                    <img src={pic1} alt=" gallery " className='gallery-image' />
                    <div className="overlay">
                    <div className="text">
                            <div className="home-about-button">
                                <BsFillArrowRightCircleFill className='home-about-icon2'/>
                                <p>Go to gallery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homegallery-images gallery-image2">
                    <img src={pic2} alt=" gallery " className='gallery-image' />
                    <div className="overlay">
                    <div className="text">
                            <div className="home-about-button">
                                <BsFillArrowRightCircleFill className='home-about-icon2'/>
                                <p>Go to gallery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homegallery-images gallery-image3">
                    <img src={pic3} alt=" gallery " className='gallery-image' />
                    <div className="overlay">
                    <div className="text">
                            <div className="home-about-button">
                                <BsFillArrowRightCircleFill className='home-about-icon2'/>
                                <p>Go to gallery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homegallery-images gallery-image4">
                    <img src={pic4} alt=" gallery " className='gallery-image' />
                    <div className="overlay">
                    <div className="text">
                            <div className="home-about-button">
                                <BsFillArrowRightCircleFill className='home-about-icon2'/>
                                <p>Go to gallery</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homegallery-images gallery-image5">
                    <img src={pic5} alt=" gallery " className='gallery-image' />
                    <div className="overlay">
                        <div className="text">
                            <div className="home-about-button">
                                <BsFillArrowRightCircleFill className='home-about-icon2'/>
                                <p>Go to gallery</p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default HomeGallery