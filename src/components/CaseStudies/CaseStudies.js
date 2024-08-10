import React from 'react'
import './CaseStudies.css'
import CaseCards from '../CaseCards/CaseCards'
import { GoArrowUpRight } from "react-icons/go";
const CaseStudies = () => {
  return (
    <div className='case-main-container'>
        <div className="case-hedding">
                <h1 className="case-title">Case Studies and Analysis Reports</h1>
                <h2 className="case-subhedding">We Try to Make our Products to it’s peak capable model to achieve the best User Experience and Utility</h2>
            </div>
            <div className="case-card">
                <CaseCards/>
                <CaseCards/>
            </div>
        <div className='case-validation'>
            <p className="validation-dis">
                Validation:  Case studies demonstrate the platform's effectiveness in connecting qualified candidates with employers. Actionable Insights:  They offer practical guidance to aspiring candidates. By seeing how others succeeded, they can replicate those strategies.
            </p>
            <button className="Start-Trial-Free-Button">
                <p className="case-btntxt">Start Your FREE Trial Now</p>
                <GoArrowUpRight className='case-arrow-icon'/>
            </button>
        </div>
    </div>
  )
}

export default CaseStudies
