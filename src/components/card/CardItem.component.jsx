import React from "react"
import "./CardItem.styles.scss"

import CardContent from "./CardContent.component.jsx"

const CardItem = ({ category, image }) => {
  return (
    <div className='card-item'>
      <CardContent category={category} />
    </div>
  )
}

export default CardItem
