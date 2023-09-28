import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import image from '../../assets/images/contact.jpg'

import { BsFillArrowRightCircleFill } from "react-icons/bs"

import pic5 from '../../assets/images/pic1.jpg'
import pic1 from '../../assets/images/pic2.jpg'
import pic2 from '../../assets/images/vol-banner.jpg'
import pic3 from '../../assets/images/d4.jpeg'
import pic4 from '../../assets/images/d2.jpeg'

import './projectpage.css'

const ProjectPage = () => {
  return (
    <div className='projectpage'>
        <Navbar />
        <div className="projectpage-container">
        <div className="contact-header">
              <div className="contact-header-image">
              <div className='contact-opacity'></div>
                <img src={image} alt="contact" />
              </div>
              <div className="contact-header-text">
                <h1>Gallery</h1>
              </div>
              
        </div>

        <div className="gallery-container">
            <div className="gallery-title">
                <h3>Past Events</h3>
                <h1>We leave no stone unturned in pursuit of justice.</h1>
            </div>
            <div className="gallery-image-container">
                <div className="gallery-images gallery-image1">
                    <img src={pic1} alt=" gallery " className='page-gallery-image' />
                    <div className="overlay">
                    <div className="text">
                      <h1>Event discription</h1>
                        </div>
                    </div>
                </div>
                <div className="gallery-images gallery-image2">
                    <img src={pic2} alt=" gallery " className='page-gallery-image' />
                    <div className="overlay">
                    <div className="text">
                      <h1>Event discription</h1>
                        </div>
                    </div>
                </div>
                <div className="gallery-images gallery-image3">
                    <img src={pic3} alt=" gallery " className='page-gallery-image' />
                    <div className="overlay">
                    <div className="text">
                      <h1>Event discription</h1>
                        </div>
                    </div>
                </div>
                <div className="gallery-images gallery-image4">
                    <img src={pic4} alt=" gallery " className='page-gallery-image' />
                    <div className="overlay">
                    <div className="text">
                      <h1>Event discription</h1>
                        </div>
                    </div>
                </div>
                <div className="gallery-images gallery-image5">
                    <img src={pic5} alt=" gallery " className='page-gallery-image' />
                    <div className="overlay">
                    <div className="text">
                      <h1>Event discription</h1>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>

        </div>
        <Footer />
    </div>
  )
}

export default ProjectPage