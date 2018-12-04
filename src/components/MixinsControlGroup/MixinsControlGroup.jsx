import React, { Component } from "react";

class MixinsControlGroup extends Component {
  render() {
    return (
      <div
        id={`mixinsCtrlGroup__${this.props.type}`}
        className={`mixins-controls-group--${
          this.props.type
        } mixins-controls-group`}
      >
        <div className="mixins-controls-header">
          <div className="mixins-controls-header__img" />
          <h4>Healthy {this.props.type}</h4>
          <button
            type="button"
            className="disabled text-button visually-hidden"
          >
            Edit
          </button>
        </div>
        {this.props.addonsAdded.length > 0 ? (
          <div className="mixins-controls-list">
            <ul className="mixins-ingredients-list">
              {this.props.addonsAdded.map(addon => {
                if (addon.type == this.props.type)
                  return addon.rows.map(r => {
                    return (
                      <li key={addon.rows.indexOf(r)}>
                        {r.quantity.label} {r.label}
                      </li>
                    );
                  });
              })}
            </ul>
          </div>
        ) : (
          <button
            className="button--add button--outline"
            onClick={() => this.props.openModal(this.props.type)}
          >
            Add {this.props.type}
          </button>
        )}
      </div>
    );
  }
}

export default MixinsControlGroup;
