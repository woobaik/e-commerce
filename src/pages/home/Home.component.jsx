import React, { Component } from "react"
import "./Home.styles.scss"
import CardItem from "../../components/card/CardItem.component"

class Home extends Component {
  constructor() {
    super()

    this.state = {
      cardItems: [
        {
          category: "hat",
          image_url: "https://via.placeholder.com/150/92c952"
        },
        {
          category: "shoes",
          image_url: "https://via.placeholder.com/150/92c952"
        },
        {
          category: "accessary",
          image_url: "https://via.placeholder.com/150/92c952"
        },
        {
          category: "women",
          image_url: "https://via.placeholder.com/150/92c952"
        },
        {
          category: "men",
          image_url: "https://via.placeholder.com/150/92c952"
        }
      ]
    }
  }
  render() {
    return (
      <div className='home'>
        {this.state.cardItems.map(({ category, image_url }) => {
          return (
            <CardItem category={category} img='{image_url}' key='{category}' />
          )
        })}
      </div>
    )
  }
}

export default Home
