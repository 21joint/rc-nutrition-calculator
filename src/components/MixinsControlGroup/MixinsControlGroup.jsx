import React, { Component } from "react";

class MixinsControlGroup extends Component {
  render() {
    const _type = this.props.type;
    const _activeAddons = this.props.activeAddons;
    const _required = this.props.required;

    return (
      <div
        id={`mixinsCtrlGroup__${_type}`}
        className={`mixins-controls-group--${_type} mixins-controls-group ${_required &&
          "required"}`}>
        <div className="mixins-controls-header">
          <div className="mixin-controls-header__graphic">
            <img
              src={`${this.props.baseUrl}/images/icons/icon-${_type}.png`}
              className="mixins-controls-header__img"
              alt={_type}
            />
          </div>
          <h4>{_type}</h4>
          <button
            onClick={() => this.props.openModal(_type)}
            type="button"
            className={`text-button ${
              _activeAddons.length < 1 ||
              (_activeAddons.length === 1 && _activeAddons[0].addon === null)
                ? "disabled"
                : ""
            }`}>
            Edit
          </button>
        </div>
        {_activeAddons.length > 1 ||
        (_activeAddons.length === 1 && _activeAddons[0].addon !== null) ? (
          <div className="mixins-controls-list">
            <ul className="mixins-ingredients-list">
              {_activeAddons.map((row, key) => {
                return (
                  row.addon !== null && (
                    <li key={key}>
                      {row.quantity.label ? row.quantity.label : ""}{" "}
                      {row.addon && row.addon.label}
                    </li>
                  )
                );
              })}
            </ul>
          </div>
        ) : (
          <button
            className="button--add button--outline"
            onClick={() => this.props.openModal(_type)}>
            Add {_type}
          </button>
        )}
      </div>
    );
  }
}

export default MixinsControlGroup;
