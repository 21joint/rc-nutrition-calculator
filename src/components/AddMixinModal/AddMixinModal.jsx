import React, { Component } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { addons as ADDONS, quantities as QUANTITIES } from "../../data.json";

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
  render() {
    let _addonsOfType = ADDONS[this.props.type];

    for (let i = 0; i < _addonsOfType.length; i++) {
      _addonsOfType[i].value = _addonsOfType[i].label = _addonsOfType[i].title;
    }
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
              <h2
                className="app-modal--title"
                ref={subtitle => (this.subtitle = subtitle)}
              >
                Add{" "}
                {this.props.type.replace(
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
              {this.props.addonRows.map(r => {
                return (
                  <div className="row align-items-center">
                    <div className="col-sm">
                      <Select
                        classNamePrefix="app-select"
                        options={QUANTITIES}
                        value={r.value}
                        onChange={this.props.onSelectQuantity}
                      />
                    </div>
                    <div className="col-sm-auto">of</div>
                    <div className="col-sm">
                      <Select
                        row={r}
                        onChange={this.props.onSelectAddon}
                        classNamePrefix="app-select"
                        options={_addonsOfType}
                        placeholder={`Choose a ${this.props.type.slice(0, -1)}`}
                      />
                    </div>
                    <div className="col-sm-auto">
                      <button
                        onClick={() => this.props.removeAddonRow(r)}
                        className="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="row">
                <div className="col-12">
                  <button
                    className="btn btn-add--row"
                    onClick={() => {
                      console.log(
                        "before adding length was ",
                        this.props.addonRows.length
                      );
                      this.props.addNewAddonRow({
                        quantity: {
                          value: 1,
                          label: "1 cup"
                        },
                        addon: null,
                        id: this.props.addonRows.length + 1
                      });
                    }}
                  >
                    Add Another {this.props.type.slice(0, -1)} +
                  </button>
                </div>
              </div>
            </div>
            <div className="app-modal--footer">
              <div className="row">
                <div className="col-auto">
                  <button className="button">Update Recipe</button>
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
