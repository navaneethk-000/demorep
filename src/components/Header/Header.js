import React from 'react'
import './Header.css'
import { shareinfo } from '../../assets'
const Header = () => {
  return (
    <div className="wave">
      <div className="wave-container">
        <img src={shareinfo} alt="ShareInfo " />
      </div>
     <div className="text-right">
      <span className='for'>
        for
      </span>
      <span className='Aspirant'>
        Aspirants
      </span>
    </div>
    </div>
  )
}

export default Header