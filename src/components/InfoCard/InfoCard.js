import React from 'react'
import './InfoCard.css'
import { GoArrowUpRight } from "react-icons/go";
const InfoCard = ({ title, description, icon }) => {
  title = 'Student'
  description = ' a mentthe listener or reader A description is a statement or passage that explains the characteristics of something, creating a mental image for the listener or reader'
  return (
    <div className='info-card-container'>
        <div className="info-card">
      <div className="info-card-content">
        <div className="info-card-title">{title}</div>
        {description && <div className="info-card-description">{description}</div>}
      </div>
      <div className="card-btn-container">
          <button className="card-btn">
        <span style={{margin:0,padding:0}}>Get Started</span>
        <GoArrowUpRight className='arrow-icon'/>
        </button>
        </div>
      {/* {icon && <div className="info-card-icon" />} */}
    </div>

    </div>
  )
}

export default InfoCard
