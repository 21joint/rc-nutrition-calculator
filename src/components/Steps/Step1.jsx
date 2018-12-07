import React, { Component } from "react";
import { products } from "../../data.json";
import { name as packageName } from "../../../package.json";

const devMode = process.env.NODE_ENV !== "production";
const baseUrl = !devMode ? "/" + packageName : "";

export default class Step2 extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
  }
  isProductSelected = product => {
    return this.props.selectedProduct == product;
  };
  onProductSelected = product => {
    if (this.isProductSelected(product)) {
      this.props.goToStep(this.props.currentStep + 1);
    }
  };

  render() {
    return (
      <div className="product-grid">
        {products.map((product, key) => {
          return (
            <article
              key={key}
              onClick={() => {
                this.props.onProductSelect(product);
                this.onProductSelected();
              }}
              id={"product--" + product.id}
              className={`product ${
                this.props.isProductSelected(product) ? "selected" : ""
              }`}
            >
              <div className="product__img">
                <img src={baseUrl + product.img} alt={product.title} />
              </div>
              <div className="product__title">{product.title}</div>
            </article>
          );
        })}
      </div>
    );
  }
}
