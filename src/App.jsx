import React, { Component } from "react";
import StepWizard from "react-step-wizard";
import "./App.scss";
import AppLoader from "./components/AppLoader";
import Step from "./components/Step";
import Nav from "./components/Nav";
import ProductGrid from "./components/ProductGrid";
import MixinsControlGroup from "./components/MixinsControlGroup";
import { addons as ADDONS, quantitites as QUANTITIES } from "./data.json";
console.log(ADDONS);

const devMode = process.env.NODE_ENV !== "production";
const STEPS = [
  { title: "Pick Your Mix" },
  { title: "What's Your Recipe" },
  { title: "Nutrition Breakdown" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      stats: {},
      currentStep: 1,
      modalIsOpen: false,
      selected: {
        product: null,
        addons: []
      }
    };
  }

  handleStepChange = stats => {
    this.setState({
      currentStep: stats.activeStep
    });
  };
  isProductSelected = product => {
    return (
      JSON.stringify(this.state.selected.product) === JSON.stringify(product)
    );
  };

  onProductSelect = product => {
    this.setState(state => {
      return {
        selected: {
          product: state.selected.product !== null ? null : product
        },
        loading: true
      };
    });

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 200);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    });
  }

  addAddon = (addon, type) => {
    this.state.selected.addons[type].push(addon);
  };

  render() {
    const StepsNav = (
      <Nav selectedProduct={this.state.selected.product} steps={STEPS} />
    );

    const Step2 =
      this.state.selected.product !== null ? (
        <section>
          <div className="product-details">
            <div className="product-details__img">
              <img
                src={
                  (!devMode ? "/rc-nutrition-calculator" : "") +
                  this.state.selected.product.img
                }
                alt={this.state.selected.product.title}
              />
            </div>
            <div className="product-details__info">
              <h2>
                {this.state.selected.product.title}
                <a href={this.state.selected.product.shop_url}>Shop Now</a>
              </h2>
              <div className="product-nutrition">
                <div className="nutrition-item--cals nutrition-item">
                  <div className="nutrition-item__label">Calories</div>
                  <div className="nutrition-item__value">
                    {this.state.selected.product.stats.cals}
                  </div>
                </div>
                <div className="nutrition-item--fats nutrition-item">
                  <div className="nutrition-item__label">Fats</div>
                  <div className="nutrition-item__value">
                    {this.state.selected.product.stats.fats}
                  </div>
                </div>
                <div className="nutrition-item--carbs nutrition-item">
                  <div className="nutrition-item--carbs__total">
                    <div className="nutrition-item__label">Total Carbs</div>
                    <div className="nutrition-item__value">
                      {this.state.selected.product.stats.total_carbs}
                    </div>
                  </div>
                  <div className="nutrition-item--carbs__breakdown">
                    <div className="carbs-breakdown-item">
                      {this.state.selected.product.stats.fiber}
                      <span>G Fiber</span>
                    </div>
                    <div className="carbs-breakdown-item">
                      {this.state.selected.product.stats.sugar}
                      <span>G Sugars</span>
                    </div>
                  </div>
                </div>
                <div className="nutrition-item--protein nutrition-item">
                  <div className="nutrition-item__label">Protein</div>
                  <div className="nutrition-item__value">
                    {this.state.selected.product.stats.protein}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="app-mixins">
            <div className="app-mixins-title">
              <h3>Now, Add Your Mixins</h3>
            </div>
            <div className="app-mixins-controls">
              {Object.keys(ADDONS).map((addonType, i) => {
                return (
                  <MixinsControlGroup
                    key={i}
                    type={addonType}
                    addAddon={this.addAddon}
                    addonsAdded={this.state.selected.addons}
                  />
                );
              })}
            </div>
            <div className="app-mixins-cta">
              <div className="app-mixins-cta-block">
                <div className="servings-form">
                  <span>Divided into</span>
                  <input type="number" id="servings-input" min="0" max="40" />
                  <span>bars / balls</span>
                </div>
                <button className="button">View Nutrition Breakdown</button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      );
    return (
      <div id="appContent">
        <AppLoader loading={this.state.loading} />
        <StepWizard
          nav={StepsNav}
          onStepChange={this.handleStepChange}
          isLazyMount
        >
          <ProductGrid
            selectedProduct={this.state.selected.product}
            onProductSelect={this.onProductSelect}
            stepHandler={this.props.goToStep}
          />
          <Step currentStep={this.state.currentStep}>{Step2}</Step>
          <Step currentStep={this.state.currentStep}>
            <section className="app-section-3">
              <div className="app-breakdown--peanut app-breakdown">
                <div className="app-breakdown__main">
                  <div className="app-breakdown__product-img-wrap">
                    <div className="app-breakdown__product-img" />
                  </div>
                  <div className="app-breakdown__titles">
                    <h2 className="h1">PB &amp; Jelly Get in My Belly</h2>
                    <div className="breakdown-mixins-description">
                      with 1 cup water, 2 oz. mashed bananas, 2 oz. sunflower
                      butter, and 1 oz. agave
                    </div>
                    <div className="breakdown-servings">
                      Split Into 8 Servings
                    </div>
                  </div>
                  <div className="app-breakdown__toggle">
                    <div className="toggle">
                      <span
                        className="toggle-control--serving toggle-control"
                        data-app-toggle-active
                      >
                        Per Serving
                      </span>
                      <span className="toggle-control--total toggle-control">
                        Recipe Total
                      </span>
                    </div>
                  </div>
                  <div className="app-breakdown__details">
                    <div className="product-nutrition">
                      <div className="nutrition-item--cals nutrition-item">
                        <div className="nutrition-item__label">Calories</div>
                        <div className="nutrition-item__value">160</div>
                      </div>
                      <div className="nutrition-item--fats nutrition-item">
                        <div className="nutrition-item__label">Fats</div>
                        <div className="nutrition-item__value">8</div>
                      </div>
                      <div className="nutrition-item--carbs nutrition-item">
                        <div className="nutrition-item--carbs__total">
                          <div className="nutrition-item__label">
                            Total Carbs
                          </div>
                          <div className="nutrition-item__value">7</div>
                        </div>
                        <div className="nutrition-item--carbs__breakdown">
                          <div className="carbs-breakdown-item">
                            3 <span>G Fiber</span>
                          </div>
                          <div className="carbs-breakdown-item">
                            2 <span>G Sugars</span>
                          </div>
                        </div>
                      </div>
                      <div className="nutrition-item--protein nutrition-item">
                        <div className="nutrition-item__label">Protein</div>
                        <div className="nutrition-item__value">12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="app-breakdown__share">
                  <h4>Save Your Nutrition Breakdown</h4>
                  <form className="form--share">
                    <input type="email" placeholder="Your email address" />
                    <button className="button--send button">Send</button>
                  </form>
                </div>
              </div>
            </section>
          </Step>
        </StepWizard>
      </div>
    );
  }
}

export default App;
