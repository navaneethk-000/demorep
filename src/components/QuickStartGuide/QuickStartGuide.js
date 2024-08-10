import React from 'react'
import './QuickStartGuide.css'
import CapabilitiesCard from '../CapabilitiesCard/CapabilitiesCard'
import { GoArrowUpRight } from "react-icons/go";
const QuickStartGuide = () => {
  return (
    <div className='quick-start-guide'>
      <h1>Quick Start guides for<br/> tech Aspirants</h1>
      <div className='CapabilitiesCard'>
         <CapabilitiesCard/>
         <CapabilitiesCard/>
         <CapabilitiesCard/>
      </div>
      <div className='btn-container'><button className="btn-main">
      Explore our Complete Range of Tutorials and Guides
      <GoArrowUpRight className='btn-icon'/>
      </button></div>
    </div>
  )
}

export default QuickStartGuide