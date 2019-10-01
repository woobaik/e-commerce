import React, { Component } from "react";
import "./Home.styles.scss";
import CardItem from "../../components/CardItem.component";

class Home extends Component {
  constructor() {
    super();
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
    };
  }
  render() {
    return (
      <div className='home'>
        <CardItem className='card-item' />
        <CardItem className='card-item' />
        <CardItem className='card-item' />
        <CardItem className='card-item' />
        <CardItem className='card-item' />
      </div>
    );
  }
}

export default Home;
