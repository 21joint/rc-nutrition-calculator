import React, {Component} from "react";
import _AppData from "../../data.json";

const devMode = process.env.NODE_ENV !== "production";

class ProductGrid extends Component {
    render() {
        return (
            <div>
                <div className="product-grid">
                    {_AppData.products.map((product, key) => {
                        return (
                            <Product
                                key={key}
                                id={product.id}
                                title={product.title}
                                img={product.img}
                                onSelect={() => this.props.onSelect(product)}
                                isSelected={() => this.props.isSelected(product)}
                            />
                        );
                    })}
                </div>
                <div className="app-section-cta">
                    <button type="button"
                            className={"button " + (this.props.selectedProduct === null ? "disabled" : "")}>
                        Continue to Mixins
                    </button>
                </div>
            </div>
        );
    }
}

class Product extends Component {
    render() {
        return (
            <article
                onClick={this.props.onSelect}
                id={"product--" + this.props.id}
                className={"product " + (this.props.isSelected() ? "selected" : "")}
            >
                <div className="product__img">
                    <img src={(!devMode ? "/rc-nutrition-calculator" : "") + this.props.img} alt={this.props.title}/>
                </div>
                <div className="product__title">{this.props.title}</div>
            </article>
        );
    }
}

export default ProductGrid;
