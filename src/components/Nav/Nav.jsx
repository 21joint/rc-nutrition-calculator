import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleStepChange = this.handleStepChange.bind(this);
  }

  render() {
    let steps = [];
    const currentStep = this.props.currentStep;
    for (let i = 1; i <= this.props.totalSteps; i += 1) {
      const isActive = currentStep >= i;
      steps.push(
        <li
          className={`progress-step-${i} ${isActive ? "active" : ""}`}
          key={i}
        >
          <button
            type="button"
            onClick={() => this.handleStepChange(i)}
            className={
              this.props.selectedProduct === null && i > 1 ? "disabled" : ""
            }
          >
            {i}. {this.props.steps[i - 1].title}
          </button>
        </li>
      );
    }

    return (
      <div>
        <nav className="app-progress-bar">
          <ul>{steps}</ul>
        </nav>
        <div className="app-title">
          <h2>
            Step {currentStep}: {this.props.steps[currentStep - 1].title}
            {this.props.steps.map(
              step => step.active && step.id + ": " + step.title
            )}
          </h2>
          <h1>
            {currentStep === 1
              ? "Recipe Nutrition Calculator"
              : currentStep === 2
              ? "What's Your Recipe"
              : "Your Nutrition Brakedown"}
          </h1>
          {currentStep <= 1 ? (
            ""
          ) : (
            <button
              onClick={() => this.props.goToStep(currentStep - 1)}
              className="app-back--button"
            >
              <i className="fas fa-angle-left" />
              Back
            </button>
          )}
        </div>
      </div>
    );
  }

  handleStepChange = step => {
    if (this.props.selectedProduct !== null) {
      this.props.goToStep(step);
    }
  };
}

export default Nav;
