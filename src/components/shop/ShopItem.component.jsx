import React from "react"

import "./ShopItem.styles.scss"
function ShopItem({ card }) {
  return <div className='shop-item'>{card.name}</div>
}

export default ShopItem
