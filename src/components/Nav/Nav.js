import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: props.currentStep
    };
  }

  render() {
    let steps = [];
    for (let i = 1; i <= this.props.totalSteps; i += 1) {
      const isActive = this.props.currentStep >= i;
      steps.push(
        <li
          className={`progress-step-${i} ${isActive ? "active" : ""}`}
          key={i}
        >
          <button type="button" onClick={() => this.props.goToStep(i)}>
            {i}. {this.props.steps[i - 1].title}
          </button>
        </li>
      );
    }
    return (
      <nav className="app-progress-bar">
        <ul>{steps}</ul>
      </nav>
    );
  }
}

export default Nav;
