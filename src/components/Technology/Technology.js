import React from 'react'
import './Technology.css'
import { MdOpenInNew } from "react-icons/md";
import { FaReact } from "react-icons/fa";
const Technology = () => {
  return (
   <div className='tech-container'>
     <div className="domainlogo">
      <FaReact className='domain'/>
     </div>
     <div className="domain-content">
      <h2 className="title">
        Flutter
      </h2>
      <p className="discription">Job seekers focused on acquiring skills and knowledge to land their dream role.</p>
      <MdOpenInNew className='icon'/>
     </div>

   </div>
  )
}

export default Technology
