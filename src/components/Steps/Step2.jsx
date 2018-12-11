import React, { Component } from "react";
import MixinsControlGroup from "../MixinsControlGroup";
import AddMixinModal from "../AddMixinModal";
import { name as packageName } from "../../../package.json";

const devMode = process.env.NODE_ENV !== "production";
const baseUrl = !devMode ? "/" + packageName : "";

export default class Step2 extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.state = {
      modal: {
        open: false,
        type: null,
        modalAddons: [props.modalAddons]
      }
    };
  }
  openModal = type => {
    this.setState({ modal: { open: true, type: type } });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.fontSize = "28px";
  };

  closeModal = () => {
    this.setState({ modal: { open: false, type: null } });
  };

  render() {
    const selectedProduct = this.props.selectedProduct;
    return (
      <section>
        <div className="product-details">
          <div className="product-details__img">
            <img
              src={baseUrl + selectedProduct.img}
              alt={selectedProduct.title}
            />
          </div>
          <div className="product-details__info">
            <h2>
              {selectedProduct.title}
              <a href={selectedProduct.shop_url}>Shop Now</a>
            </h2>
            <div className="product-nutrition">
              <div className="nutrition-item--cals nutrition-item">
                <div className="nutrition-item__label">Calories</div>
                <div className="nutrition-item__value">
                  {selectedProduct.stats.cals / selectedProduct.standard_servings}
                </div>
              </div>
              <div className="nutrition-item--fats nutrition-item">
                <div className="nutrition-item__label">Fats</div>
                <div className="nutrition-item__value">
                  {selectedProduct.stats.fats / selectedProduct.standard_servings}
                </div>
              </div>
              <div className="nutrition-item--carbs nutrition-item">
                <div className="nutrition-item--carbs__total">
                  <div className="nutrition-item__label">Total Carbs</div>
                  <div className="nutrition-item__value">
                    {selectedProduct.stats.carbs / selectedProduct.standard_servings}
                  </div>
                </div>
                <div className="nutrition-item--carbs__breakdown">
                  <div className="carbs-breakdown-item">
                    {selectedProduct.stats.fiber / selectedProduct.standard_servings}
                    <span>G Fiber</span>
                  </div>
                  <div className="carbs-breakdown-item">
                    {selectedProduct.stats.sugar / selectedProduct.standard_servings}
                    <span>G Sugars</span>
                  </div>
                </div>
              </div>
              <div className="nutrition-item--protein nutrition-item">
                <div className="nutrition-item__label">Protein</div>
                <div className="nutrition-item__value">
                  {selectedProduct.stats.protein / selectedProduct.standard_servings}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-mixins">
          <div className="app-mixins-title">
            <h3>Now, Add Your Mixins</h3>
          </div>
          <div className="app-mixins-controls">
            {Object.keys(this.props.allAddons).map((type, key) => {
              return (
                <MixinsControlGroup
                  key={key}
                  type={type}
                  modalAddons={this.props.modalAddons[type]}
                  activeAddons={this.props.activeAddons}
                  openModal={this.openModal.bind(this)}
                  baseUrl={!devMode ? baseUrl : ""}
                />
              );
            })}
            {(() => {
              const mType = this.state.modal.type;
              if (mType) {
                return (
                  <AddMixinModal
                    type={mType}
                    modalAddons={this.props.modalAddons}
                    activeAddons={this.props.activeAddons}
                    openModal={this.openModal.bind(this)}
                    closeModal={this.closeModal.bind(this)}
                    modalIsOpen={this.state.modal.open}
                    onSelectAddon={this.props.onSelectAddon}
                    onSelectQuantity={this.props.onSelectQuantity}
                    addNewAddonRow={this.props.addNewAddonRow}
                    removeAddonRow={this.props.removeAddonRow}
                    onSubmitModal={this.props.onSubmitModal}
                    baseUrl={!devMode ? baseUrl : ""}
                  />
                );
              }
            })()}
          </div>
          <div className="app-mixins-legend text-center">
            <legend>Select at least one liquid to proceed </legend>
          </div>
          <div className="app-mixins-cta">
            <div className="app-mixins-cta-block">
              <div className="servings-form">
                <span>Divided into</span>
                <input
                  type="number"
                  id="servings-input"
                  min={0}
                  max={40}
                  onChange={this.props.onDividedByChange}
                  defaultValue={selectedProduct.standard_servings}
                />
                <span>bars / balls</span>
              </div>
              <button
                type="button"
                className="button"
                disabled={
                  this.props.activeAddons.liquids.length < 1 ||
                  (this.props.activeAddons.liquids.length === 1 &&
                    !this.props.activeAddons.liquids[0].addon)
                }
                onClick={() => {
                  this.props.onViewBreakdown(this.props.goToStep);
                }}>
                View Nutrition Breakdown
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
