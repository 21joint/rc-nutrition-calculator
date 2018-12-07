import React, { Component } from "react";
import MixinsControlGroup from "../MixinsControlGroup";
import AddMixinModal from "../AddMixinModal";

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
            <img src={selectedProduct.img} alt={selectedProduct.title} />
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
                  {selectedProduct.stats.cals}
                </div>
              </div>
              <div className="nutrition-item--fats nutrition-item">
                <div className="nutrition-item__label">Fats</div>
                <div className="nutrition-item__value">
                  {selectedProduct.stats.fats}
                </div>
              </div>
              <div className="nutrition-item--carbs nutrition-item">
                <div className="nutrition-item--carbs__total">
                  <div className="nutrition-item__label">Total Carbs</div>
                  <div className="nutrition-item__value">
                    {selectedProduct.stats.total_carbs}
                  </div>
                </div>
                <div className="nutrition-item--carbs__breakdown">
                  <div className="carbs-breakdown-item">
                    {selectedProduct.stats.fiber}
                    <span>G Fiber</span>
                  </div>
                  <div className="carbs-breakdown-item">
                    {selectedProduct.stats.sugar}
                    <span>G Sugars</span>
                  </div>
                </div>
              </div>
              <div className="nutrition-item--protein nutrition-item">
                <div className="nutrition-item__label">Protein</div>
                <div className="nutrition-item__value">
                  {selectedProduct.stats.protein}
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
                  addAddon={this.addAddon}
                  modalAddons={this.props.modalAddons[type]}
                  openModal={this.openModal.bind(this)}
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
                    typeActiveAddons={this.props.activeAddons[mType]}
                    openModal={this.openModal.bind(this)}
                    closeModal={this.closeModal.bind(this)}
                    modalIsOpen={this.state.modal.open}
                    onSelectAddon={this.props.onSelectAddon}
                    onSelectQuantity={this.props.onSelectQuantity}
                    addNewAddonRow={this.props.addNewAddonRow}
                    onSubmitModal={this.props.onSubmitModal}
                    removeAddonRow={this.props.removeAddonRow}
                  />
                );
              }
            })()}
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
                  defaultValue={this.props.dividedBy}
                />
                <span>bars / balls</span>
              </div>
              <button className="button">View Nutrition Breakdown</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}