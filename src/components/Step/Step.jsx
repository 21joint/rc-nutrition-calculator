import React, { Component } from "react";

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current
    };
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Step;
