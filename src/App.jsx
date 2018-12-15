import React, { Component } from "react";
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
      currentStep: 1,
      modal: {
        open: false,
        type: null
      },
      activeAddons,
      modalAddons,
      finalRows: [],
      selected: {
        product: null
      },
      dividedBy: 12
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
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
        },
        dividedBy: product.standard_servings
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
    this.setState(state => {
      let newState = { ...state };
      if (this.state.modalAddons[type].length > 1)
        newState.modalAddons[type].splice(key - 1, 1);
      else if (this.state.modalAddons[type].length === 1) {
        newState.modalAddons[type][0] = {
          id: 1,
          quantity: allQuantities[0],
          addon: null
        };
      }
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
    typeof callback === "function" && callback();
  };

  FinalCalculation = () => {
    const product = this.state.selected.product;
    const productStats = product.stats;
    const activeAddons = this.state.activeAddons;

    let finalRows = [{ ...productStats, source: "product" }];

    Object.keys(activeAddons).map(type => {
      activeAddons[type].map(row => {
        finalRows.push({
          quantity: row.quantity,
          ...row.addon,
          source: "addon"
        });
      });
    });

    this.setState({
      finalRows
    });
  };

  onViewBreakdown = cb => {
    this.FinalCalculation();
    typeof cb === "function" && cb(this.state.currentStep + 1);
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
              activeAddons={this.state.activeAddons}
            />
          }
          onStepChange={this.handleStepChange}
          isLazyMount>
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
            requiredType={{ type: "liquids", min: 1 }}
          />
          <Steps.Step3
            currentStep={this.state.currentStep}
            selectedProduct={this.state.selected.product}
            activeAddons={this.state.activeAddons}
            finalRows={this.state.finalRows}
            dividedBy={this.state.dividedBy}
          />
        </StepWizard>
      </div>
    );
  }
}

export default App;
