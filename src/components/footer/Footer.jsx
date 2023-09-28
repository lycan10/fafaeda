import React, {useState} from 'react'
import { AiFillHeart } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import {AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai"
import logo from '../../assets/images/logo.png'
import image1 from '../../assets/images/chat.png'
import image2 from '../../assets/images/mail.png'
import image3 from '../../assets/images/location.png'

import './footer.css'
import DonateButton from '../../constants/btn/DonateButton';
import bank from '../../assets/images/bank.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const date = new Date();
  
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-content1">
        <div className="footer1">
          <div className="footer-header">
            <h1>About</h1>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
          <div className="footer-button">
            <DonateButton onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='donation-title'>Donations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="donation-acct">
            <img src={bank} alt="transfer" />
            <p> GTB: 9045XXXXXX</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
        </div>
        <div className="footer1">
        <div className="footer-header">
            <h1>Explore</h1>
          </div>
          <ul>
            <li>
              <HashLink to='/'>
                <span>Home</span>
              </HashLink>
              </li>
              <li>
              <HashLink to='/about'>
                <span>About us</span>
              </HashLink>
              </li>
              <li>
              <HashLink to='/project'>  
                <span>Gallery</span>
              </HashLink>
              </li>
              <li>
              <HashLink>
                <span>Volunteer</span>
              </HashLink>
              </li>
              <li>
              <HashLink to='/contact'>
                <span>Contact us</span>
              </HashLink>
              </li>
          </ul>
        </div>
        <div className="footer1">
        <div className="footer-header">
            <h1>Contact</h1>
          </div>
          <div className="footer-contact-container">
            <div className="footer-contact-content-container">
              <div className="footer-contact-content-image">
                <img src={image1} alt="icons" />
              </div>
              <div className="footer-contact-content">
                <p>Call Anytime</p>
                <h1>0902 XXX XXXX</h1>
              </div>
            </div>
            <div className="footer-contact-content-container">
              <div className="footer-contact-content-image">
              <img src={image2} alt="icons" />
              </div>
              <div className="footer-contact-content">
                <p>Send email</p>
                <h1>info@fafaeda.com</h1>
              </div>
            </div>
            <div className="footer-contact-content-container">
              <div className="footer-contact-content-image">
              <img src={image3} alt="icons" />
              </div>
              <div className="footer-contact-content">
                <p>Visit us</p>
                <h1>12, Victor close, Festac</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="footer1">
        <div className="footer-header">
            <h1>Newsletter</h1>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
          <div className="footer-newsletter">
            <input type='text' placeholder='Email Address' /> <div className="footer-button">
              <BsFillArrowRightCircleFill style={{color: 'white'}} />
              <p>Send</p>
        </div>
        </div>
        </div>
        </div>
        <div className="footer-content2">
          <div className="footer-comapany-icon">
            <img src={logo} alt="company-logo" />
          </div>
          <div className="footer-company-bottom-content">
          <div className="footer-social-icons">
            <div className="footer-social-div">
              <Link to='/'><AiOutlineTwitter  className='footer-social-logo'/></Link>
            </div>
            <div className="footer-social-div">
              <Link to='/'><AiFillFacebook  className='footer-social-logo'/></Link>
            </div>
            <div className="footer-social-div">
              <Link to='/'><AiOutlineInstagram  className='footer-social-logo'/></Link>
            </div>
          </div>
          <div className="footer-copyright">
            <p> &#169; Copyright {date.getFullYear()}, FAFAEDA </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer