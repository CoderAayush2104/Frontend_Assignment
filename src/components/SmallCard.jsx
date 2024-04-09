import React from 'react'
import "./smallcard.css"
const SmallCard = ({title,subtitle,value,change,change_in_percent,price}) => {
  return (
    <div className="small-card">
        <span className="small-card-title">{title}</span>
        <span className="small-card-subtitle">{subtitle}</span>
        <span className="small-card-value">{value}<span className='small-card-caret'>{change > 0 ? `▲` : `▼`}</span></span>
        <span className="small-card-change">{change} {`(${change_in_percent}%)`}</span>
       
        <span className="small-card-price">{price}</span>
    </div>
  )
}

export default SmallCard