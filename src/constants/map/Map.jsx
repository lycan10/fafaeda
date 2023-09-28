import React from 'react'
import './map.css'
const Map = () => {
  return (
    <div className='map'>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.3369710021775!2d13.179574074713921!3d11.811656388407169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1104a1723ab99a17%3A0x66f480073dec4ec3!2sBama%20motor%20park!5e0!3m2!1sen!2sng!4v1691681048830!5m2!1sen!2sng"
      width="100%" 
      height="420" 
      style={{border:'none', outline:'none'}}
      >
      </iframe>  
    </div>
  )
}

export default Map