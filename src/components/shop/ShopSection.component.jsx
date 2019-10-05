import React from "react"
import "./ShopSection.styles.scss"
import ShopItem from "./ShopItem.component"

function ShopSection({ cardData }) {
  return (
    <div className='shop-section'>
      <div className='shop-section-category-wrap'>
        <div className='shop-section-title'>{cardData.title.toUpperCase()}</div>
        <div className='shop-section-more'>More</div>
      </div>
      <div className='shop-section-image'>
        {cardData.items
          .filter((item, index) => index < 4)
          .map(card => (
            <ShopItem key={card.id} card={card}></ShopItem>
          ))}
      </div>
    </div>
  )
}

export default ShopSection
