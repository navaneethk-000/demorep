import React from 'react'
import './Footer.css'
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className="social-main">
      <div className="social-icon">
        <h1 className="follow-text">Follow us</h1>
        <FaInstagram className='icons'/>
        <FaXTwitter className='icons'/>
        <RiLinkedinBoxFill className='icons'/>
        <FaGithub className='icons'/>
        <FaYoutube className='icons'/>
      </div>

      </div>
      <div className="footer-content">
        <div className="about">
            <ul>
                <span className='about-title'>About</span>
                <li>About ShareInfo</li>
                <li>Education</li>
                <li>Careers</li>
                <li>Merchantise</li>
            </ul>
        </div>
        <div className="about">
             <ul>
                <span className='about-title'>Discover</span>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Refund & Payment Policy</li>
                <li>Discover & Case Studies</li>
            </ul>
        </div>
        <div className="signup">

        <input type="email" className='signup-email' placeholder='Sign up for Updates on Latest News and Feeds'/>
        <div className="privacy-poicy-footer">
                    <p>I accept <span>Imiot</span>’s Terms and Conditions and acknowledge that my information will be used in accordance with <br /> <span>Imiot</span> <a href="#"><u>Privacy Policy</u></a></p>
                    <button className="footer-btn"> Sign up</button>

                </div>
        </div>
      </div>
    </div>
  )
}

export default Footer