import React from 'react'
import './Domains.css'
import Technology from '../Technology/Technology'
const Domains = () => {
  return (
    <div className='domain-container'>
      <div className="domain-hedding">
        <h1 className='title-main'>Technology at it’s <span className='core'>Core</span></h1>
        <h2 className='sub-headding'>We Always Concentrate to Integrate the Best Configuration from the Industry !</h2>
      </div>

      <div className="domain-types">
        <Technology/>
        <Technology/>
        <Technology/>
        <Technology/>
        <Technology/>
        <Technology/>
        <Technology/>
        <Technology/>
        <Technology/>

      </div>

    </div>
  )
}

export default Domains
