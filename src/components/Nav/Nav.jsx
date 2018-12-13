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
          {currentStep <= 1 ? (
            ""
          ) : (
            <button
              onClick={() => this.props.goToStep(currentStep - 1)}
              className="button--text app-back--button"
            >
              <span className="btn-icon btn-icon--left">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 63.336 63.336"
                  width="11px"
                  height="11px"
                  xmlSpace="preserve"
                >
                  <path
                    fill="#f05a5c"
                    d="M14.924,34.879l30.822,27.938c0.383,0.348,0.864,0.519,1.344,0.519c0.545,0,1.087-0.222,1.482-0.657
			c0.741-0.818,0.68-2.083-0.139-2.824l-29.642-26.87L45.66,3.342c0.742-0.818,0.68-2.083-0.139-2.824
			c-0.817-0.742-2.082-0.679-2.824,0.139L14.758,31.48c-0.439,0.485-0.59,1.126-0.475,1.723
			C14.224,33.811,14.436,34.438,14.924,34.879z"
                  />
                </svg>
              </span>
              <span className="btn-text">Back</span>
            </button>
          )}
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
              ? "What’s Your Recipe"
              : "Your Nutrition Breakdown"}
          </h1>
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
