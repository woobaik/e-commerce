import React from "react"
import "./CardContent.styles.scss"

function CardContent({ category }) {
  return (
    <div className='card-content'>
      <div>
        <h1>{category.toUpperCase()}</h1>
      </div>
      <div>SHOP</div>
    </div>
  )
}

export default CardContent
