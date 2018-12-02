import React, { Component } from "react";
import _AppData from "../../data.json";

const devMode = process.env.NODE_ENV !== "production";

class ProductGrid extends Component {
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
      <div>
        <div className="product-grid">
          {_AppData.products.map((product, key) => {
            return (
              <Product
                product={product}
                key={key}
                onSelect={() => {
                  this.props.onProductSelect(product);
                  this.onProductSelected();
                }}
                isProductSelected={this.isProductSelected}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <article
        onClick={this.props.onSelect}
        id={"product--" + product.id}
        className={
          "product " + (this.props.isProductSelected(product) ? "selected" : "")
        }
      >
        <div className="product__img">
          <img
            src={(!devMode ? "/rc-nutrition-calculator" : "") + product.img}
            alt={product.title}
          />
        </div>
        <div className="product__title">{product.title}</div>
      </article>
    );
  }
}

export default ProductGrid;
