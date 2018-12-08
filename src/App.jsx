import React, { Component } from "react";
import log from "console.pretty";
import StepWizard from "react-step-wizard";
import "./App.scss";
import AppLoader from "./components/AppLoader";
import Steps from "./components/Steps";
import Nav from "./components/Nav";

import { addons as allAddons, quantities as allQuantities } from "./data.json";

class App extends Component {
  constructor() {
    super();
    let activeAddons = {};
    let modalAddons = {};
    Object.keys(allAddons).map((type, key) => {
      activeAddons[type] = [];
      modalAddons[type] = [
        {
          id: 1,
          quantity: allQuantities[0],
          addon: null
        }
      ];
    });
    this.state = {
      loading: true,
      stats: {},
      currentStep: 1,
      modal: {
        open: false,
        type: null
      },
      activeAddons,
      modalAddons,
      selected: {
        product: null
      },
      dividedBy: 12,
      finalStats: {
        cals: 0,
        fats: 0,
        carbs: 0,
        fiber: 0,
        sugar: 0,
        protein: 0
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    });
  }

  handleStepChange = stats => {
    this.setState({
      currentStep: stats.activeStep
    });
  };

  onDividedByChange = e => {
    e.preventDefault();
    e.target.value <= e.target.getAttribute("max") &&
      e.target.value >= e.target.getAttribute("min") &&
      this.setState({
        dividedBy: e.target.value
      });
  };

  isProductSelected = product => {
    return (
      JSON.stringify(this.state.selected.product) == JSON.stringify(product)
    );
  };

  onProductSelect = (product, cb) => {
    this.setState(
      {
        selected: {
          product: this.isProductSelected(product) ? null : product
        }
      },
      function() {
        if (this.state.selected.product !== null) {
          cb(this.state.currentStep + 1);
        }
      }
    );
  };

  onSelectQuantity = (type, id) => value => {
    this.setState(state => {
      let newState = { ...state };
      newState.modalAddons[type][id].quantity = value;
      return newState;
    });
  };

  onSelectAddon = (type, id) => value => {
    this.setState(state => {
      let newState = { ...state };
      newState.modalAddons[type][id].addon = value;
      return newState;
    });
  };

  addNewAddonRow = type => {
    this.setState(state => {
      const key = state.modalAddons.length;
      let newState = { ...state };
      newState.modalAddons[type].push({
        id: key,
        quantity: allQuantities[0],
        addon: null
      });
      return newState;
    });
  };

  removeAddonRow = (type, key) => {
    if (this.state.modalAddons[type].length - 1 > 0)
      this.setState(state => {
        let newState = { ...state };
        delete newState.modalAddons[type][key];
        return newState;
      });
  };

  onSubmitModal = (type, addons, callback) => {
    this.setState({
      loading: true
    });
    this.setState(state => {
      let newState = { ...state };
      newState.activeAddons[type] = addons[type];
      return newState;
    });

    setTimeout(() => {
      this.setState(state => {
        let newState = { ...state };
        newState.loading = false;
        return {
          loading: false,
          modal: {
            open: false,
            type: null
          }
        };
      });
      console.log(this.state);
      if (typeof callback === "function") callback();
    }, 100);
  };

  FinalCalculation = () => {
    const product = this.state.selected.product;
    const productStats = product.stats;
    const activeAddons = this.state.activeAddons;

    log.blue(`Product Stats -- \n ${JSON.stringify(productStats)}`);
    log.blue(`Active Addons -- \n ${JSON.stringify(activeAddons)}`);

    Object.keys(productStats).map(type => {
      this.setState(state => {
        let newState = { ...state };
        //log.yellow(type, newState.finalStats[type]);
        log.green(parseInt(productStats[type], 10));
        newState.finalStats[type] += parseInt(productStats[type], 10);
        return newState;
      });
    });

    Object.keys(activeAddons).map(type => {
      activeAddons[type] &&
        activeAddons[type].map(t => {
          this.setState(state => {
            let newState = { ...state };
            newState.finalStats[t] += activeAddons[t];
            return newState;
          });
        });
    });
  };

  onViewBreakdown = () => {
    this.FinalCalculation();
  };
  render() {
    return (
      <div id="appContent">
        <AppLoader loading={this.state.loading} />
        <StepWizard
          nav={
            <Nav
              selectedProduct={this.state.selected.product}
              steps={[Steps.Step1, Steps.Step2, Steps.Step3]}
              currentStep={this.state.currentStep}
            />
          }
          onStepChange={this.handleStepChange}
          isLazyMount
        >
          <Steps.Step1
            currentStep={this.state.currentStep}
            selectedProduct={this.state.selected.product}
            onProductSelect={this.onProductSelect}
            isProductSelected={this.isProductSelected}
          />
          <Steps.Step2
            currentStep={this.state.currentStep}
            selectedProduct={this.state.selected.product}
            dividedBy={this.state.dividedBy}
            onDividedByChange={this.onDividedByChange}
            onSelectAddon={this.onSelectAddon}
            onSelectQuantity={this.onSelectQuantity}
            onSubmitModal={this.onSubmitModal}
            allAddons={allAddons}
            modalAddons={this.state.modalAddons}
            activeAddons={this.state.activeAddons}
            addNewAddonRow={this.addNewAddonRow}
            removeAddonRow={this.removeAddonRow}
            onViewBreakdown={this.onViewBreakdown}
            requiredMixin={{ title: "liquids", min: 1 }}
          />
          <Steps.Step3
            currentStep={this.state.currentStep}
            selectedProduct={this.state.selected.product}
          />
        </StepWizard>
      </div>
    );
  }
}

export default App;
