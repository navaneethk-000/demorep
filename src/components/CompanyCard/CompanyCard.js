import React from 'react'
import './CompanyCard.css'
import { crystal } from '../../assets'
const CompanyCard = () => {
  return (
    <>
      <div className="Recruiting-companies">
        <div className="companies">
             <img src={crystal} alt="company"/>
             <h1 className='company-name'>CRYSTAL</h1>
         </div>
      </div>
    </>
  ) 
}

export default CompanyCard
