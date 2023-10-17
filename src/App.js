import React, { Component } from "react";
import Product from "./product";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Product />
        </div>
      </React.Fragment>
    );
  }
}
