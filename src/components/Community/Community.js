import React from 'react'
import './Community.css'
import { GoArrowUpRight } from 'react-icons/go'
const Community = () => {
  return (
    <div className='community'>
        <h1 className="community-t1">Built by <span>COMMUNITY</span></h1>
        <h1 className="community-t2">Join the Community</h1>
        <h1 className="community-t3">Choose your Interest Domain and Start Now!</h1>

        <div className="community-cards">
            <div className="community-card1">
                <h1 className="community-card-t1"><span>for</span> Designers</h1>
                <p className="community-card-discription">Job seekers focused on acquiring skills and knowledge to land their dream role. And knowledge to land their dream role.</p>
                <button className="community-card-btn">Join Now<GoArrowUpRight className='community-icon'/></button>
            </div>
            <div className="community-card1">
                <h1 className="community-card-t1"><span>for</span> Designers</h1>
                <p className="community-card-discription">Job seekers focused on acquiring skills and knowledge to land their dream role. And knowledge to land their dream role.</p>
                <button className="community-card-btn">Join Now<GoArrowUpRight className='community-icon'/></button>
            </div>
            <div className="community-card1">
                <h1 className="community-card-t1"><span>for</span> Designers</h1>
                <p className="community-card-discription">Job seekers focused on acquiring skills and knowledge to land their dream role. And knowledge to land their dream role.</p>
                <button className="community-card-btn">Join Now<GoArrowUpRight className='community-icon'/></button>
            </div>
        </div>
        <div className="subscribe">
            <div className="signup-content">
                <h1 className="signup-content-t1">Do You Like to be the Part of next Era of Placements?</h1>
                <h1 className="signup-content-t2">Then Don’t Miss our Latest Updates!</h1>
                <div className="signupinput">
                <input type="email" className='signup-email' placeholder='Sign up for Updates on Latest News and Feeds'/>
                <button className="signupbtn">Sign up</button>
                </div>
                <div className="privacy-policy">
                    <p>I accept <span>Imiot</span>’s Terms and Conditions and acknowledge that my information will be used in accordance with <span>Imiot</span> <a href="#"><u>Privacy Policy</u></a></p>
                    
                </div>
            </div>
        </div>
        <div className="explore">
            <h1 className="explore-title">Explore Complete Imiot Range of Products and Commitments</h1>
            <div className="product">
                <div className="product1">
                <h1 className="product-text">Imiot LearnSpace</h1>
                </div>
                <div className="product1">
                <h1 className="product-text">Imiot LearnSpace</h1>
                </div>
                <div className="product1">
                <h1 className="product-text">Imiot LearnSpace</h1>
                </div>
                <div className="product1">
                <h1 className="product-text">Imiot LearnSpace</h1>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Community
