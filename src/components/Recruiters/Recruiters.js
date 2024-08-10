import React from 'react'
import './Recruiters.css'
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import CompanyCard from '../CompanyCard/CompanyCard'
const Recruiters = () => {
  return (
    <div className='recruiter-main-div'>
      <h1 className="recruiters-title">TOP RECRUITERS</h1>
      <div className="company-lists">
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
        <CompanyCard/>
      </div>
      <p className="recruiter-partner">
      These Companies are trusting us to Enlarge their Workforce Capability into Next Level
      <button className="partner-btn">Meet our Partners <FaArrowRight className='partner-arrowicon'/></button>
      </p>
      <button className="freetrial-btn">Start Trial Free Button <GoArrowUpRight className='trialarrow'/></button>
    </div>
  )
}

export default Recruiters