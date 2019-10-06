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
          image_url:
            "https://cdn.pixabay.com/photo/2016/12/11/00/39/cat-1898503_960_720.jpg",
          id: 1
        },
        {
          category: "shoes",
          image_url:
            "https://hautecature.files.wordpress.com/2013/01/catshoes.jpg",
          id: 2
        },
        {
          category: "accessary",
          image_url:
            "https://www.dhresource.com/0x0s/f2-albu-g7-M00-D9-8B-rBVaSlvtMAuAUJ2gAAN9Sx6CM7Q014.jpg/christmas-elk-headband-for-cats-hair-decorations.jpg",
          id: 3
        },
        {
          category: "women",
          image_url:
            "https://i.dailymail.co.uk/i/pix/2012/07/03/article-2168089-13E71191000005DC-707_468x543.jpg",
          id: 4,
          classProp: "image-large"
        },
        {
          category: "men",
          image_url:
            "https://i.pinimg.com/originals/e4/a7/b9/e4a7b9965c6bf93aa11f8d888f7ad92a.jpg",
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
