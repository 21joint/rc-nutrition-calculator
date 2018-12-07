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
          addon: null,
          active: false
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
      dividedBy: 12
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
        addon: null,
        active: false
      });
      return newState;
    });
  };

  removeAddonRow = (type, key) => {
    this.setState(state => {
      let newState = { ...state };
      delete newState.modalAddons[type][key];
      return newState;
    });
  };

  onSubmitModal = (addons, type) => {
    this.setState({
      loading: true
    });
    this.setState(state => {
      let newState = { ...state };
      newState.activeAddons[type] = [...addons];
      return newState;
    });

    this.setState({
      loading: false
    });
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
