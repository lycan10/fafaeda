import React from 'react';
import { AiFillHeart} from "react-icons/ai"
import './doanatebutton.css'


const DonateButton = ({onClick}) => {
  

  return (
    <div className=" custom-btn  btn-3 btn">
        <button onClick={onClick}> <AiFillHeart className='btn-icon'/> Donate</button>
    </div>
    
  )
}

export default DonateButton