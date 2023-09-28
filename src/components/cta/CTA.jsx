import React, {useState} from 'react'
import heart from '../../assets/images/heart.png'
import { AiFillHeart } from "react-icons/ai";
import './cta.css'

import DonateButton from '../../constants/btn/DonateButton';

import bank from '../../assets/images/bank.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CTA = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='cta'>
      <div className="cta-container">
        <div className="cta-image">
          <img src={heart} alt="heart" />
        </div>
        <div className="cta-text">
          <h1>Let’s make a difference in the lives of others</h1>
        </div>
          <DonateButton onClick={handleShow} />
      </div>
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
  )
}

export default CTA