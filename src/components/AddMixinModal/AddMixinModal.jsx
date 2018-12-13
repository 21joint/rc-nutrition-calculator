import React, { Component } from "react";
import "./AddMixinModal.scss";
import Modal from "react-modal";
import AddonRow from "../AddonRow";

Modal.setAppElement("#root");

Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,.45)";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontSize: "1.6rem",
    padding: "50px",
    overflow: "visible",
    width: "640px",
    maxWidth: "100%"
  },
  h2: {
    fontSize: "28px"
  }
};

class AddMixinModal extends Component {
  onModalCancel = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <div>
        <Modal
          style={customStyles}
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.props.afterOpenModal}
          onRequestClose={this.props.closeModal}
          contentLabel={`Add ${this.props.type} to your mix`}
        >
          <div className="app-modal">
            <div className="app-modal--header">
              <h2 className="app-modal--title">
                Add{" "}
                {this.props.type &&
                  this.props.type.replace(
                    this.props.type.charAt(0),
                    this.props.type.charAt(0).toUpperCase()
                  )}{" "}
                to Your Recipe
              </h2>
              <img
                className="app-modal--img"
                src={`${this.props.baseUrl}/images/icons/icon-${
                  this.props.type
                }.png`}
                alt={this.props.type}
              />
            </div>
            <div className="app-modal--body">
              {this.props.modalAddons[this.props.type].map((r, key) => {
                return (
                  <AddonRow
                    id={key}
                    key={key}
                    type={this.props.type}
                    selectedAddon={r.addon}
                    selectedQuantity={r.quantity}
                    removeAddonRow={this.props.removeAddonRow}
                    onSelectQuantity={this.props.onSelectQuantity}
                    onSelectAddon={this.props.onSelectAddon}
                  />
                );
              })}
              <div className="row">
                <div className="col-12">
                  <button
                    type="button"
                    className={`btn btn-add--row ${
                      this.props.modalAddons[this.props.type].length < 3
                        ? ""
                        : "visually-hidden"
                    }`}
                    onClick={() => this.props.addNewAddonRow(this.props.type)}
                  >
                    Add another{" "}
                    {this.props.type && this.props.type.slice(0, -1)} +
                  </button>
                </div>
              </div>
            </div>
            <div className="app-modal--footer">
              <div className="row">
                <div className="col-auto">
                  <button
                    className="button"
                    type="button"
                    onClick={() => {
                      this.props.onSubmitModal(
                        this.props.type,
                        this.props.modalAddons,
                        this.props.closeModal
                      )
                    }}
                  >
                    Update Recipe
                  </button>
                </div>
                <div className="col-auto">
                  <button
                    className="button button--outline button--outline--gray"
                    type="button"
                    onClick={this.onModalCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddMixinModal;
