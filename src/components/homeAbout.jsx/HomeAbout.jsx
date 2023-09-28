import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import "./homeabout.css"
import image from '../../assets/images/d1.png'
import image2 from '../../assets/images/img23.jpg'
import {HashLink} from 'react-router-hash-link'
const HomeAbout = () => {
  return (
    <div className="home-about">
        <div className="home-about-container">
            <div className="home-about-image">
                <div className="home-about-image1">
                    <img src={image2} alt="about" />
                </div>
                <div className="home-about-image2"></div>
                <div className="home-about-image3">
                <img src={image} alt="about" />
                </div>
                
            </div>
            <div className="home-about-content">
                <div className="home-about-title">
                    <div className="about-vertical"></div>
                    <h1>About FAFAEDA</h1>
                </div>
                <div className="home-about-description">
                    <h1>Helping each other can make world better</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn.</p>
                </div>
                <div className="m-v">
                    <div className="home-about-m-v">
                        <div className="home-about-header">
                            <BsFillArrowRightCircleFill className='home-about-icon'/>
                            <h1>Our Mission</h1>
                        </div>
                        <p>To promote an emotional, mental and economic shelter for oppressed widows and less privilege children and youth, reassuring them of a brighter future despite all emotional and domestic abuse they have experienced.</p>
                    </div>
                    <div className="home-about-m-v">
                        <div className="home-about-header">
                            <BsFillArrowRightCircleFill className='home-about-icon' />
                            <h1>Our Vision</h1>
                        </div>
                        <p>To provide succor and comfort to marginalized widows and less privileged across Nigeria.</p>
                    </div>
                </div>
                <div className="home-about-projects">
                    <div className="home-about-charity">
                        <h1>Cases Handled</h1>
                        <p>1000</p>
                    </div>
                    <div className="home-about-charity">
                        <h1>Donations</h1>
                        <p>500</p>
                    </div>
                </div>
               
                <div className="home-about-button" >
                <HashLink to="/about#about">
                     <BsFillArrowRightCircleFill className='home-about-icon2'/>
                    <p>Learn More</p>
                    </HashLink>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default HomeAbout