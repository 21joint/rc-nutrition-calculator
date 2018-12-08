import React, { Component } from "react";
import Select from "react-select";
import {
  addons as allAddons,
  quantities as allQuantities
} from "../../data.json";

class AddonRow extends Component {
  render() {
    const type = this.props.type;
    const id = this.props.id;
    const addonsForType = allAddons[type];
    return (
      <div className={`row row-${id} align-items-center`}>
        <div className="col-sm">
          <Select
            classNamePrefix="app-select"
            options={allQuantities}
            defaultValue={this.props.selectedQuantity}
            onChange={this.props.onSelectQuantity(type, id)}
            placeholder={"Select Quantity"}
          />
        </div>
        <div className="col-sm-auto p-0">of</div>
        <div className="col-sm">
          <Select
            classNamePrefix="app-select"
            options={addonsForType}
            onChange={this.props.onSelectAddon(type, id)}
            defaultValue={this.props.selectedAddon}
            placeholder={`Choose a ${type && type.slice(0, -1)}`}
          />
        </div>
        <div className="col-sm-auto p-0">
          <button
            onClick={() => this.props.removeAddonRow(type, id)}
            className="button button-remove--addonrow"
          >
            <svg
              width="12px"
              height="12px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 86 86"
            >
              <g id="Close">
                <path
                  fill="#d2d2d2"
                  d="M64.998,80.095c1.338,1.352,1.338,3.541,0,4.893c-1.336,1.35-3.506,1.352-4.844,0l-39.151-39.54
		c-1.338-1.352-1.338-3.543,0-4.895l39.15-39.539c1.338-1.352,3.506-1.352,4.844,0C66.335,2.366,66.335,4.556,65,5.907
		L29.294,43.001L64.998,80.095z"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default AddonRow;
