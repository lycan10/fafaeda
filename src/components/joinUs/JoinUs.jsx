import React from 'react'
import './joinus.css'
import banner from '../../assets/images/vol-banner.jpg'
import { BsFillArrowRightCircleFill } from "react-icons/bs"

const JoinUs = () => {
  return (
    <div className='joinus'>
        <div className="joinus-container">
            <div className="joinus-image">
                <div className='joinus-opacity'></div>
                <img src={banner} alt="banner" />
            </div>
            <div className="joinus-content">
                <h1>Volunteer with us taday, let us fight dimestic violence</h1>
                <div className="joinus-button">
                    <BsFillArrowRightCircleFill className='home-about-icon2' />
                    <p>Learn More</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JoinUs