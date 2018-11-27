import React, { Component } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import AppLoader from "../AppLoader/AppLoader";

class MainContent extends Component {
  render() {
    return (
      <main role="main">
        <AppLoader loading={this.props.loading} />
        <section className="app-section app-section-0">
          <div className="app-title">
            <h2>
              Step{" "}
              {this.props.steps.map(
                step => step.active && step.id + ": " + step.title
              )}
            </h2>
            <h1>Nutrition Calculator</h1>
          </div>
          <ProductGrid />
        </section>
      </main>
    );
  }
}

export default MainContent;
