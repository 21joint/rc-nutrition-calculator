import React, {Component} from "react";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.handleStepChange = this.handleStepChange.bind(this)
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
                    <button type="button"
                            onClick={() => this.handleStepChange(i)}
                            className={(this.props.selectedProduct === null && i > 1) ? "disabled" : ""}>
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
                        Step {this.props.currentStep}: {this.props.steps[this.props.currentStep - 1].title}
                        {
                            this.props.steps.map(step => step.active && step.id + ": " + step.title)
                        }
                    </h2>
                    <h1>
                        {
                            (this.props.currentStep === 1 ? "Recipe Nutrition Calculator" : (this.props.currentStep === 2 ? "What's Your Recipe" : "Your Nutrition Brakedown"))
                        }
                    </h1>
                </div>
            </div>
        );
    }

    handleStepChange = (step) => {
        if (this.props.selectedProduct !== null) {
            this.props.goToStep(step)
        }
    }
}

export default Nav;
