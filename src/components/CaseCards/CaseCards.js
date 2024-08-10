import React from 'react'
import './CaseCards.css'
import case1 from '../../assets/case1.svg'
import { MdOpenInNew } from "react-icons/md";
const CaseCards = () => {
  return (
    <div>
      <div className="case-card-container">
        <div className="case-img">
           <img src={case1} alt="case study" />
        </div>
        <div className="case-content">
            <h2 className="casecard-date">May 2024</h2>
            <h2 className="casecard-discription">Institution and Industry Bridging with Skills and Practice</h2>
            <MdOpenInNew className='case-icon'/>
        </div>
        
      </div>
    </div>
  )
}
export default CaseCards