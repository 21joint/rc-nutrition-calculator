import "rc-tabs/assets/index.css";
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
      activeKey: "1",
      start: 0
    };
  }
  componentDidMount() {
    console.log(document.body.innerHTML);
  }
  onChange = activeKey => {
    console.log(`onChange ${activeKey}`);
    this.setState({
      activeKey
    });
  };

  render() {
    const tabsStart = this.state.start;
    const finalRows = this.props.finalRows;
    const resultTypes = [
      { title: "Per Serving", multiplier: this.props.dividedBy },
      { title: "Per Total", multiplier: 1 }
    ];
    const dividedBy = this.props.dividedBy;
    const finalAddons = finalRows.filter(
      stat => stat.source.indexOf("addon") > -1
    );

    const PanelContent = ({ id }) => {
      return (
        <div key={id}>
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
      );
    };

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
                  return <span>{res}</span>;
                })()}
              </div>
              <div className="breakdown-servings">
                Split Into {dividedBy} Servings
              </div>
            </div>

            <Tabs
              renderTabBar={() => <ScrollableInkTabBar />}
              renderTabContent={() => <TabContent animatedWithMargin />}
              navWrapper={content => <Sortable>{content}</Sortable>}
              activeKey={this.state.activeKey}
              onChange={this.onChange}>
              <TabPane tab={`${resultTypes[tabsStart].title}`} key="0">
                <PanelContent id={tabsStart} resultTypes={resultTypes} />
              </TabPane>
              <TabPane tab={`${resultTypes[tabsStart + 1].title}`} key="1">
                <PanelContent id={tabsStart + 1} resultTypes={resultTypes} />
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
