import React from 'react'
import './contactpage.css'

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import image from '../../assets/images/contact.jpg'
import image1 from '../../assets/images/chat.png'
import image2 from '../../assets/images/mail.png'
import image3 from '../../assets/images/location.png'

import image4 from '../../assets/images/hands.jpeg'

import { BsFillArrowRightCircleFill } from "react-icons/bs"
import CTA from '../../components/cta/CTA'
import Map from '../../constants/map/Map'

const ContactPage = () => {
  return (
    <div className='contactpage'>
        <Navbar />
        <div className="contactpage-container">
            <div className="contact-header">
              <div className="contact-header-image">
              <div className='contact-opacity'></div>
                <img src={image} alt="contact" />
              </div>
              <div className="contact-header-text">
                <h1>Contact</h1>
              </div>
            </div>
            <div className="contact-feedback">
              <div className="contact-feedback-title">
              <div className="home-causes-title">
                    <div className="about-vertical"></div>
                    <h1 style={{color: '#75C2F6', fontSize: '18px', fontWeight:'900'}} >Get in touch</h1>
                </div>
                <p>We'd love to hear from you and assist you. </p>
              </div>
              <div className="contact-feedback-content">
                <div className="contact-feedback-content-left">
                  <div className="contact-feedback-content-image">
                    <img src={image4} alt="banner" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                  <div className="contact-details">
                  <div className="footer-contact-container">
            <div className="footer-contact-content-container">
              <div className="footer-contact-content-image" style={{marginRight: '0.5rem'}}>
                <img src={image1} alt="icons" />
              </div>
              <div className="footer-contact-content">
                <p>Call Anytime</p>
                <h1 style={{color: 'rgb(32, 32, 32)'}}>0902 XXX XXXX</h1>
              </div>
            </div>
            <div className="footer-contact-content-container">
              <div className="footer-contact-content-image" style={{marginRight: '0.5rem'}}>
              <img src={image2} alt="icons" />
              </div>
              <div className="footer-contact-content">
                <p>Send email</p>
                <h1 style={{color: 'rgb(32, 32, 32)'}}>info@fafaeda.com</h1>
              </div>
            </div>
            <div className="footer-contact-content-container">
              <div className="footer-contact-content-image" style={{marginRight: '0.5rem'}}>
              <img src={image3} alt="icons" />
              </div>
              <div className="footer-contact-content">
                <p>Visit us</p>
                <h1 style={{color: 'rgb(32, 32, 32)'}}>12, Victor close, Festac</h1>
              </div>
            </div>
                  </div>
                  </div>
                </div>
                <div className="contact-feedback-content-right">
                  <div className="contact-form">
                    <div className="form-name">
                      <input type='text' placeholder='Your name' />
                    </div>
                    <div className="form-e-s-c">
                    <div className="form-email">
                      <input type='text' placeholder='Email address' />
                    </div>
                    <div className="form-email">
                      <input type='text' placeholder='Subject' />
                    </div>
                    </div>
                    <div className="form-name">
                      <input type='number' placeholder='Phone number' />
                    </div>
                    <div className="form-name form-textarea">
                      <textarea type='text' placeholder='Message' />
                    </div>
                    <div className="form-button">
                    <BsFillArrowRightCircleFill className='home-about-icon2'/>
                      <p>Send a Message</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Map />
            <CTA/>
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage