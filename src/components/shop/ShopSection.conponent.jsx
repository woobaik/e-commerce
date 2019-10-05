import React from "react"
import "./ShopSection.styles.scss"

function ShopSection({ cardData }) {
  console.log(cardData)
  return (
    <div className='shop-section'>
      <div className='shop-section-title'>{cardData.title}</div>
      <div>
        {cardData.items
          .filter((data, idx) => idx < 4)
          .map(item => {
            return <div key={item.id}>{item.name}</div>
          })}
      </div>
    </div>
  )
}

export default ShopSection
