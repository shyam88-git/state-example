import React, { Component } from "react";

export default class Product1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          name: "JBL Speaker",
          price: 234.0,
          photo: "D:/State in React/state-example1/src/Shyam.jpg",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-header">{this.state.data[0].name}</div>

          <div className="card-body">
            <img src={this.state.data[0].photo} alt=" shyam" width="200" height="200" />
          </div>

          <div className="card-footer">{this.state.data[0].price}</div>
        </div>
      </React.Fragment>
    );
  }
}
