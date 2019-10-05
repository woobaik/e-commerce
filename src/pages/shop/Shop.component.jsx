import React, { Component } from "react"
import SHOP_DATA from "../../shop.data"

import ShopSection from "../../components/shop/ShopSection.component"

class Shop extends Component {
  constructor() {
    super()
    this.state = {
      shop_data: SHOP_DATA
    }
  }

  render() {
    return (
      <div className='shop-main'>
        {this.state.shop_data.map(({ id, ...otherItem }) => {
          return <ShopSection key={id} cardData={otherItem}></ShopSection>
        })}
      </div>
    )
  }
}

export default Shop
