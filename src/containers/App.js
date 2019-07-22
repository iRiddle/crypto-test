import React, { Component } from "react";
import PropTypes from "prop-types";

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  };

  checkApi = () => {
    console.log("check if api");
  };
  render() {
    return (
      <div>
        <h1>
          <button onClick={this.checkApi}>check api</button>
        </h1>
      </div>
    );
  }
}
