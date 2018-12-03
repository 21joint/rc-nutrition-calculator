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

const initialState = {
  addonRows: [
    {
      id: new Date().getTime(),
      quantity: {
        value: 1,
        label: "1 cup"
      },
      addon: null
    }
  ]
};

class AddMixinModal extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  addNewAddonRow = row => {
    this.setState(state => {
      return {
        addonRows: [...state.addonRows, row]
      };
    });
  };

  removeAddonRow = row => {
    if (this.state.addonRows.length <= 1) {
      return;
    } else {
      const filteredAddonRows = this.state.addonRows.filter(
        r => r.id !== row.id
      );
      this.setState({
        addonRows: filteredAddonRows
      });
    }
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
                src={`/images/icons/icon-${this.props.type}.png`}
                alt={this.props.type}
              />
            </div>
            <div className="app-modal--body">
              {this.state.addonRows.map(row => {
                return (
                  <AddonRow
                    key={row.id}
                    row={row}
                    type={this.props.type}
                    selectedAddon={row.addon}
                    selectedQuantity={row.quantity}
                    removeAddonRow={() => this.removeAddonRow(row)}
                    onSelectAddon={() => this.onSelectAddon(row)}
                    onSelectQuantity={() => this.onSelectQuantity(row)}
                  />
                );
              })}
              <div className="row">
                <div className="col-12">
                  <button
                    className="btn btn-add--row"
                    onClick={() => {
                      console.log(
                        "before adding length was ",
                        this.state.addonRows.length
                      );
                      this.addNewAddonRow({
                        id: new Date().getTime(),
                        quantity: {
                          value: 1,
                          label: "1 cup"
                        },
                        addon: null
                      });
                    }}
                  >
                    Add Another{" "}
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
                    onClick={() =>
                      this.props.onSubmitMixin({
                        type: this.props.type,
                        rows: this.state.addonRows
                      })
                    }
                  >
                    Update Recipe
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
