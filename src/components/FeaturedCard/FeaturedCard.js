import React from 'react'
import './FeaturedCard.css'
import news1 from '../../assets/news1.png'
import { MdOpenInNew } from 'react-icons/md'
const FeaturedCard = () => {
  return (
    <div>
      <div className="featured-container">
            <img src={news1} alt="news"/>
            <div className="news-content">
            <h2 className="newschannel">AIN News</h2>
            <h1 className="channelcontent">ShareInfo breaks new ground: a modern suit for Placements and recruitment</h1>
            <p className="news-discription"> 
            The world of placements and recruitment is undergoing a transformation. Gone are the days of rigid, one-size-fits-all approaches. ShareInfo steps forward...
            </p>
            <div className="news-footer">
              <h1 className="news-date">May 2024</h1>
              <MdOpenInNew className='news-icon'/>
            </div>
            </div>
      </div>
    </div>
  )
}

export default FeaturedCard
