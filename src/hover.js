import React, { useState } from 'react'
import "./Tooltip.css";

export default function Tooltip({position,text,children}) {
  const [isHover,setHover]=useState(false);

  const toggleToolip =(status)=>{
    setHover(status)
    

  }

  const getPosition=()=>{
    switch (position) {
      case 'top':
        return { width:'6%', transform: 'translateX(-50%)' };
        
      default:
        return {};
    }

  }
  return (
    <div className='tooltip-container'>
    <div className='tooltip-wrapper' onMouseEnter={()=>toggleToolip(true)} onMouseLeave={()=>toggleToolip(false)}>
     {children}
    </div>
      
     {isHover&& (
      <div className={`tooltip-text ${position}`} style={getPosition()}>
        {text}
      </div>
    )}
    </div>
  )    

}
