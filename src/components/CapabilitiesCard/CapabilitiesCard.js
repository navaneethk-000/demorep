import React from 'react'
import './CapabilitiesCard.css'
import { capabilities1 } from '../../assets'
const CapabilitiesCard = () => {
  return (
    <div className='container'>
      <img src={capabilities1} alt="img" />
      <p className="discriptiion">
      Provides context for the competition, replicating a real-world scenario to help you hone your skills effectively.
      </p>
      <button className="getstartbtn">
            ShareInfo Challenges
      </button>

    </div>
  )
}

export default CapabilitiesCard
