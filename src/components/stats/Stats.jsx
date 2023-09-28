import React from 'react'
import './stats.css'

const Stats = () => {
  return (
    <div className='statistics'>
        <div className="statistics-container">
            <div className="statistics-content">
                <h1>600,000</h1>
                <p>Total Donations</p>
            </div>
            <div className="statistics-content">
                <h1>480</h1>
                <p>Campaigns Closed</p>
            </div>
            <div className="statistics-content">
                <h1>100</h1>
                <p>Happy People</p>
            </div>
            <div className="statistics-content">
                <h1>20+</h1>
                <p>Volunteers</p>
            </div>
        </div>
    </div>
  )
}

export default Stats