import React, { Component } from "react";

export default class Step3 extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
  }
  render() {
    return (
      <section className="app-section-3">
        <div className="app-breakdown--peanut app-breakdown">
          <div className="app-breakdown__main">
            <div className="app-breakdown__product-img-wrap">
              <div className="app-breakdown__product-img" />
            </div>
            <div className="app-breakdown__titles">
              <h2 className="h1">PB &amp; Jelly Get in My Belly</h2>
              <div className="breakdown-mixins-description">
                with 1 cup water, 2 oz. mashed bananas, 2 oz. sunflower butter,
                and 1 oz. agave
              </div>
              <div className="breakdown-servings">Split Into 8 Servings</div>
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
                    <div className="nutrition-item__label">Total Carbs</div>
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
    );
  }
}
