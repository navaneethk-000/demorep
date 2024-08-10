import React from 'react'
import './Featured.css'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
const Featured = () => {
  return (
    <div className="featured-main">
      <div className="featured-hedding">
        <h1 className="featured-title">We Were Featured at</h1>
        <h2 className="featured-subhedding">These National Media Helped Lot us to Grow and Be the Best Platform for Process</h2>
      </div>
      <div className="featured-news">
        <FeaturedCard/>
        <FeaturedCard/>
        <FeaturedCard/>
      </div>
    </div>
  )
}

export default Featured
