import React from 'react'
import './FloatingNavBar.css'
const FloatingNavBar = () => {
  return (
    <div>
      {/*------------------------ Floating NavBar------------------------*/}
      <>
      <div className="share-info">
      <div className="share-info-items">
        <div className="share-info-item">
          <div className="share-info-item-title">ShareInfo <span className='nav-itm'>Aspirant</span></div>
          {/* <span className='nav-text'>Aspirant</span> */}
          <div className="share-info-item-line" />
        </div>
        <div className="share-info-item share-info-item-text">features</div>
        <div className="share-info-item share-info-item-text">future scops</div>
        <div className="share-info-item share-info-item-text">collaborations</div>
        <div className="share-info-item share-info-item-text">partners</div>
        <div className="share-info-item share-info-item-text">expert opinion</div>
        <div className="share-info-item share-info-item-text">about us</div>
      </div>
    </div>
      </>
    </div>
  )
}

export default FloatingNavBar
