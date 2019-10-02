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
          image_url: "https://www.fillmurray.com/g/200/300",
          id: 1
        },
        {
          category: "shoes",
          image_url: "https://www.fillmurray.com/g/200/300",
          id: 2
        },
        {
          category: "accessary",
          image_url: "https://www.fillmurray.com/g/200/300",
          id: 3
        },
        {
          category: "women",
          image_url: "https://www.fillmurray.com/g/200/300",
          id: 4,
          classProp: "image-large"
        },
        {
          category: "men",
          image_url: "https://www.fillmurray.com/g/200/300",
          id: 5,
          classProp: "image-large"
        }
      ]
    }
  }
  render() {
    return (
      <div className='home'>
        {this.state.cardItems.map(({ category, image_url, id, classProp }) => {
          return (
            <CardItem
              category={category}
              image={image_url}
              key={id}
              classProp={classProp}
            />
          )
        })}
      </div>
    )
  }
}

export default Home
