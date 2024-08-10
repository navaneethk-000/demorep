import React from 'react'
import './JobHunters.css'
import InfoCard from '../InfoCard/InfoCard'
const JobHunters = () => {
  return (
    <div>
       <div className="header-text">
      We Value All Kinds<br />
      of Job Hunters!<br />
      <span className='subheading-text'>With Our Intelligent System</span>
    </div>
    <div className='capabilities'>
        <div className="card">
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
        </div>
    </div>
    </div>
  )
}

export default JobHunters
