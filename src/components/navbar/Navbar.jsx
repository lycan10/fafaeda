import React, {useState, useEffect} from 'react'
import './navbar.css'
import logo from '../../assets/images/logo.png'
import {AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram} from "react-icons/ai"
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

import { HiMail } from "react-icons/hi"
import DonateButton from '../../constants/btn/DonateButton'
import {RiCloseLine, RiMenu3Line} from "react-icons/ri"

import bank from '../../assets/images/bank.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [toggleMenu]);

    const Menu = ()=> (
        <>
            <ul>
                <li>
                    <Link to='/'> <span>Home</span></Link>
                </li>
                <li>
                    <Link to='/about'><span>About</span></Link>
                </li>
                <li>
                    <Link to='/project'><span>Gallery</span></Link>
                </li>
                <li>
                    <Link to='/contact'><span>Contact</span></Link>
                </li>
            </ul>
        </>
    )
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-content-container">
                <div className="navbar-content1">
                    <div className="navbar-content-details-container">
                        <div className="navbar-details">
                            <h1>Welcome to FAFAEDA </h1>
                            <div className='navbar-email'>
                                <HiMail className='social-logo1' style={{color: '#75C2F6'}} />
                                <h1>fafaeda@donate.come</h1>
                            </div>
                        </div>
                        <div className="navbar-socials">
                            <Link to='/'><AiOutlineTwitter  className='social-logo'/></Link>
                            <Link to='/'><AiFillFacebook  className='social-logo'/></Link>
                            <Link to='/'><AiOutlineInstagram  className='social-logo'/></Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-content2">
                    <div className='navbar-links'>
                        <Menu />
                    </div>
                    <DonateButton  onClick={handleShow}/>
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
            <div className="navbar-mini-container">
                {
                toggleMenu ?
                <RiCloseLine color='white' size={30} onClick={()=>setToggleMenu(false)}/>
                : 
                <RiMenu3Line color='white' size={30} onClick={()=>setToggleMenu(true)}/>
                }
                {   toggleMenu && (
                <div className= {`navbar-menu_container ${ toggleMenu ? "slide-bottom" : "slide-top"}`}>
                    <div className="navbar-menu_links">
                        <nav >
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
                            <div className='navbar-socials'>
                                <Link to='/'><AiOutlineTwitter  className='social-logo'/></Link>
                                <Link to='/'><AiFillFacebook  className='social-logo'/></Link>
                                <Link to='/'><AiOutlineInstagram  className='social-logo'/></Link>
                            </div>
                          </ul>
                        </nav>
                      </div>
                    </div>
            )
        }

                </div>
        </div>
    </div>
  )
}

export default Navbar