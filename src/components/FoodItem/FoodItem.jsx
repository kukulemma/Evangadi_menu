import React, { Component } from "react";
import "./FoodItem.css";
export default class FoodItem extends Component {
  render() {
    // console.log(this.props);
    //props help to create reusable component
    //Props allow to render dynamic data passed/recmended for small statc list of elemts
    //same date keep & props used to pass data/dynamic from one component to another/in props Data flow is unidirectional-/parent to child
    //pass dynamic data/value to this props obj.
    //distructuring data-this.props.img

    const { img, title, price, desc } = this.props;
    return (
      <>
        <div className="single-food">
          <div className="img">
            <img src={img} />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">{desc}</div>
        </div>
      </>
    );
  }
}
