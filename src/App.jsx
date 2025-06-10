import React, { Component } from "react";
import Header from "./components/Header/Header";
import FoodMenu from "./components/FoodMenu/FoodMenu";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FoodMenu />
      </div>
    );
  }
}
