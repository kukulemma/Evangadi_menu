import React, { Component } from "react";
import "./FoodMenu.css";
import FoodItem from "../FoodItem/FoodItem";
import menu from "../../commonResource/data";
export default class FoodMenu extends Component {
  
  // .map() function requires a callback function as an argument.
  //.map() js method is used to iterate/loop over an array of data /
  // through each element in an array/and render a list of elements in your React components.
  // destracturing--item.img---
  // provide a unique key to each element which helps React update the list when data changes.
  // ? optional chaining operator- it avoid throwing error when the property/data is null

  render() {
    //  console.log(menu);
    // let menu = null;
    return (
      <div className="foods-container">
        {menu?.map((item, index) => {
          const { img, title, price, desc } = item;
          return (
            <FoodItem
              key={index}
              img={img}
              title={title}
              price={price}
              desc={desc}
              //(...item)
            />
          );
        })}
      </div>
    );
  }
}

// ------------------------///------
// <div className="foods-container"></div>
{
  /* <FoodItem
          img="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp"
          title="{TIMATIM SELAXA (ቲማቲም ሰላጣ)}"
          price="$5.99"
          desc=" Timatim Salata refers to a type of fresh ...."
        />  */
}
{
  /* <FoodItem    />      */
}
