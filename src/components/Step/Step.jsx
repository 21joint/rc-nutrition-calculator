import React, { Component } from "react";

class Step extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Step;
