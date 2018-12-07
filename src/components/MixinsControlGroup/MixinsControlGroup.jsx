import React, { Component } from "react";

class MixinsControlGroup extends Component {
  render() {
    const _type = this.props.type;
    const _activeAddons = this.props.activeAddons;

    return (
      <div
        id={`mixinsCtrlGroup__${_type}`}
        className={`mixins-controls-group--${_type} mixins-controls-group ${_type.indexOf(
          "liquids"
        ) > -1 && "required"}`}
      >
        <div className="mixins-controls-header">
          <div className="mixins-controls-header__img" />
          <h4>{_type}</h4>
          <button
            type="button"
            className={`text-button ${
              _activeAddons.length < 1 ? "disabled" : ""
            }`}
          >
            Edit
          </button>
        </div>
        {_activeAddons.length >= 1 ? (
          <div className="mixins-controls-list">
            <ul className="mixins-ingredients-list">
              {_activeAddons.map((row, key) => {
                return <li key={key}>{JSON.stringify(row.addon)}</li>;
              })}
            </ul>
          </div>
        ) : (
          <button
            className="button--add button--outline"
            onClick={() => this.props.openModal(_type)}
          >
            Add {_type}
          </button>
        )}
      </div>
    );
  }
}

export default MixinsControlGroup;
