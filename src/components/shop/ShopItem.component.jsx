import React from "react"

import "./ShopItem.styles.scss"
function ShopItem({ card }) {
  console.log(card)
  return (
    <div className='shop-item'>
      <div
        className='shop-item-image'
        style={{ backgroundImage: `url(${card.imageUrl})` }}
      ></div>
      <div className='shop-item-detail'>
        <div>{card.name}</div>
        <div>${card.price}</div>
      </div>
      <span></span>
    </div>
  )
}

export default ShopItem
