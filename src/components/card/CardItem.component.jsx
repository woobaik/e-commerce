import React from "react"
import "./CardItem.styles.scss"

import CardContent from "./CardContent.component.jsx"

const CardItem = ({ category, image, classProp }) => {
  return (
    <div className={`${classProp} card-container`}>
      <div
        className='card-image'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <CardContent className='card-content' category={category} />
    </div>
  )
}

export default CardItem
