import React, { Component } from "react";
import Sortable from "react-sortablejs";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

export default class Step3 extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.state = {
      activeKey: "",
      start: 0
    };
  }
  onChange = activeKey => {
    console.log(`onChange ${activeKey}`);
    this.setState({
      activeKey
    });
  };

  onTabClick = key => {
    console.log(`onTabClick ${key}`);
    if (key === this.state.activeKey) {
      this.setState({
        activeKey: ""
      });
    }
  };

  tick = () => {
    this.setState({
      start: this.state.start + 10
    });
  };

  handleNotExistKey = () => {
    this.setState({
      activeKey: "-1"
    });
  };

  render() {
    const tabsStart = this.state.start;
    const finalRows = this.props.finalRows;
    const dividedBy = this.props.dividedBy;
    const finalAddons = finalRows.filter(
      stat => stat.source.indexOf("addon") > -1
    );

    const PanelContent = resultTypes => (
      <div>
        {this.props.resultTypes.map((restype, i) => (
          <div key={i}>
            {this.props.chidlren}
            {JSON.stringify(restype)}
          </div>
        ))}
      </div>
    );

    let finalStats = {};
    finalRows.map(row => {
      Object.keys(row).map(key => {
        if (typeof row[key] === "number") {
          finalStats[key] !== undefined
            ? (finalStats[key] = row[key])
            : (finalStats[key] += row[key]);
        }
      });
    });

    console.log(finalStats);

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
                with{" "}
                {(() => {
                  let res = "";
                  finalAddons.map((mixin, i) => {
                    res +=
                      (i > 0 ? ", " : "") +
                      mixin.quantity.label +
                      " " +
                      mixin.label;
                  });
                  return <span className="small">{res}</span>;
                })()}
              </div>
              <div className="breakdown-servings">
                Split Into {dividedBy} Servings
              </div>
            </div>
            <Tabs
              renderTabBar={() => (
                <ScrollableInkTabBar onTabClick={this.onTabClick} />
              )}
              renderTabContent={() => <TabContent animatedWithMargin />}
              navWrapper={content => <Sortable>{content}</Sortable>}
              activeKey={this.state.activeKey}
              onChange={this.onChange}>
              <TabPane tab={`tab ${tabsStart}`} key="1">
                <div className="app-breakdown__toggle">
                  <div className="toggle">
                    <span
                      className="toggle-control--serving toggle-control"
                      data-app-toggle-active>
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
              </TabPane>
              <TabPane tab={`tab ${tabsStart + 1}`} key="2">
                <div className="app-breakdown__toggle">
                  <div className="toggle">
                    <span
                      className="toggle-control--serving toggle-control"
                      data-app-toggle-active>
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
              </TabPane>
            </Tabs>
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
