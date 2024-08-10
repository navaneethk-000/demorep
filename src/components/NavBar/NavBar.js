import React from 'react'
import './NavBar.css'
import { logo } from '../../assets'
import { IoSearchOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

const NavBar = () => {
  return (
    <div>
       <div className="nav-section">
      <div className="nav-left">
        <div className="nav-item">
          <img src={logo} alt="logo"  />
        </div>
        <div className="nav-text">
          <a className='nav' href="#">Aspirants</a>
          <a className='nav'href="#">Campus</a>
          <a className='nav'href="#">Employers</a>
        </div>
      </div>
      <div className="nav-right">
        <div className="search-icon">
          <div>
          <IoSearchOutline className='search-icon'/>
          </div>
        </div>
        <div className="button-container">
          <div className="button">
            <span>Get Started</span>
            <GoArrowUpRight className='arrow-icon'/>
              <div />
              <div />
        
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar