import React, { Component } from "react";
import { addons as ADDONS, quantities as QUANTITIES } from "../../data.json";
import AddMixinModal from "../AddMixinModal";

class MixinsControlGroup extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      addonRows: [
        {
          quantity: {
            label: "1 cup",
            value: 1
          },
          addon: null
        }
      ]
    };
  }

  onSelectQuantity = row => {
    console.log(row);
  };

  onSelectAddon = addon => {
    console.log(addon);
    this.setState({
      addonRows: [{ addon }]
    });
  };
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
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.fontSize = "28px";
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    let _addonsOfType = ADDONS[this.props.type];

    for (let i = 0; i < _addonsOfType.length - 1; ++i) {
      _addonsOfType[i].value = _addonsOfType[i].label = _addonsOfType[i].title;
    }

    return (
      <div>
        <div
          id={`mixinsCtrlGroup__${this.props.type}`}
          className={`mixins-controls-group--${
            this.props.type
          } mixins-controls-group`}
        >
          <div className="mixins-controls-header">
            <div className="mixins-controls-header__img" />
            <h4>Healthy {this.props.type}</h4>
            <a className="disabled text-button">Edit</a>
          </div>
          <div className="mixins-controls-list">
            <button
              className="button--add button--outline"
              onClick={this.openModal}
            >
              Add {this.props.type}
            </button>
            <AddMixinModal
              openModal={this.openModal}
              closeModal={this.closeModal}
              addNewAddonRow={this.addNewAddonRow}
              removeAddonRow={this.removeAddonRow}
              onSelectQuantity={() => this.onSelectQuantity}
              onSelectAddon={() => this.onSelectAddon}
              type={this.props.type}
              modalIsOpen={this.state.modalIsOpen}
              addonRows={this.state.addonRows}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MixinsControlGroup;
