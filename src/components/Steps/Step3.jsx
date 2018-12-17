import "rc-tabs/assets/index.css";
import React, { Component } from "react";
import Sortable from "react-sortablejs";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import { name as packageName } from "../../../package.json";

const devMode = process.env.NODE_ENV !== "production";
const baseUrl = !devMode ? "/" + packageName : "";

export default class Step3 extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.state = {
      activeKey: "0",
      start: 0
    };
  }
  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };

  render() {
    const tabsStart = this.state.start;
    const finalRows = this.props.finalRows;
    const resultTypes = [
      { title: "Per Serving", multiplier: this.props.dividedBy },
      { title: "Recipe Total", multiplier: 1 }
    ];
    const dividedBy = this.props.dividedBy;
    const finalAddons = finalRows.filter(
      stat => stat.source.indexOf("addon") > -1
    );

    let finalStats = {};
    finalRows.map(row => {
      Object.keys(row).map(key => {
        if (typeof row[key] === "number") {
          finalStats[key] !== undefined
            ? (finalStats[key] +=
                (row["source"] == "addon" ? row["quantity"].value : 1) *
                row[key])
            : (finalStats[key] = row[key]);
        }
      });
    });

    const PanelContent = ({ id, dividedBy }) => {
      const valueFormatter = value => {
        let res = (value * (1 / dividedBy)).toFixed(1);

        return parseInt(res.split(".")[1], 10) !== 0 ? res : res.split(".")[0];
      };
      return (
        <div key={id}>
          <div className="app-breakdown__details">
            <div className="product-nutrition">
              <div className="nutrition-item--cals nutrition-item">
                <div className="nutrition-item__label">Calories</div>
                <div className="nutrition-item__value">
                  {valueFormatter(finalStats["cals"])}
                </div>
              </div>
              <div className="nutrition-item--fats nutrition-item">
                <div className="nutrition-item__label">Fats</div>
                <div className="nutrition-item__value">
                  {valueFormatter(finalStats["fats"])}
                </div>
              </div>
              <div className="nutrition-item--carbs nutrition-item">
                <div className="nutrition-item--carbs__total">
                  <div className="nutrition-item__label">Total Carbs</div>
                  <div className="nutrition-item__value">
                    {valueFormatter(finalStats["carbs"])}
                  </div>
                </div>
                <div className="nutrition-item--carbs__breakdown">
                  <div className="carbs-breakdown-item">
                    {valueFormatter(finalStats["fiber"])} <span>G Fiber</span>
                  </div>
                  <div className="carbs-breakdown-item">
                    {valueFormatter(finalStats["sugar"])} <span>G Sugars</span>
                  </div>
                </div>
              </div>
              <div className="nutrition-item--protein nutrition-item">
                <div className="nutrition-item__label">Protein</div>
                <div className="nutrition-item__value">
                  {valueFormatter(finalStats["protein"])}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <section className="app-section-3">
        <div className="app-breakdown--peanut app-breakdown">
          <div className="app-breakdown__main">
            <div className="app-breakdown__product-img-wrap">
              <div className="app-breakdown__product-img">
                <img
                  src={baseUrl + this.props.selectedProduct.img}
                  alt={this.props.selectedProduct.title}
                />
              </div>
            </div>
            <div className="app-breakdown__titles">
              <h2 className="h1">{this.props.selectedProduct.title}</h2>
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
                <PanelContent
                  id={tabsStart}
                  resultTypes={resultTypes}
                  dividedBy={dividedBy}
                />
              </TabPane>
              <TabPane tab={`${resultTypes[tabsStart + 1].title}`} key="1">
                <PanelContent
                  id={tabsStart + 1}
                  resultTypes={resultTypes}
                  dividedBy="1"
                />
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
