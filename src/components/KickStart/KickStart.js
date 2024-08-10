import React from 'react'
import './KickStart.css'
import { mentor, placement, practice } from '../../assets'
const KickStart = () => {
  return (
    <div>
      <div className='titleParent'>
      <div className='title'>
        <b className='kickStartNowContainer'>
          <span>Kick Start</span>
          <span className='now'>Now !</span>
        </b>
        <div className='kickstartYourCareerContainer'>
          <span className='kickstartYourCareer'>Kickstart Your Career with </span>
          <b className='shareinfo'>ShareInfo</b>
          <span className='kickstartYourCareer'>, We assure it will <br/>be Your Perfect Placement Companion</span>
        </div>
      </div>
      <div className='capabilities1Parent'>
        <div className='capabilities1'>
        <img className='maskGroupIcon' alt="practice" src={practice} />
          <div className='title1'>
            <b className='kickStartNowContainer'>Practice Ultimate</b>
            <div className='stateOfTheArtPerformanceA'>State-of-the-art performance across a <br /> range of industry benchmarks.</div>
          </div>
        </div>
        <div className='capabilities1'>
        <img className='maskGroupIcon1' alt="mentor" src={mentor} />
          <div className='title1'>
            <b className='kickStartNowContainer'>Mentor Match</b>
            <div className='stateOfTheArtPerformanceA'>State-of-the-art performance across a <br />range of industry benchmarks.</div>
          </div>
        </div>
        <div className='capabilities1'>
             <img className='maskGroupIcon' alt="placement" src={placement} />
          <div className='title1'>
            <b className='kickStartNowContainer'>Live Placement Battle</b>
            <div className='stateOfTheArtPerformanceA'>State-of-the-art performance across a <br/>range of industry benchmarks.</div>
          </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}
export default KickStart
