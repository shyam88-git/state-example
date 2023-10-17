import React, { Component } from "react";
import Product from "./product";
import './App.css';
import Product1 from "./Product1";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Product />
          <Product1/>
        </div>
      </React.Fragment>
    );
  }
}
