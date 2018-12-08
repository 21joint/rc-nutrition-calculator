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
    return (
      JSON.stringify(this.props.selectedProduct) === JSON.stringify(product)
    );
  };

  render() {
    return (
      <div className="product-grid">
        {products.map((product, key) => {
          return (
            <article
              key={key}
              onClick={() => {
                this.props.onProductSelect(product, this.props.goToStep);
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
