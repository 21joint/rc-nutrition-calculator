import React, {Component} from "react";
import Select from "react-select";
import { addons as ADDONS, quantities as QUANTITIES } from "../../data.json";

class AddonRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: props.row
        }
    }

    onSelectQuantity = (quantity) =>  {
        this.setState({
            row: {
                quantity
            }
        });
    };
  
    onSelectAddon = (addon) =>  {
        this.setState({
            row: {
                addon
            }
        });
    };

    render() {
        const row = this.props.row;
        const type = this.props.type;
        const addonsForType = ADDONS[type];
        return (
            <div className={`row row-${row.id} align-items-center`}>
                <div className="col-sm">
                <Select
                    row={row}
                    classNamePrefix="app-select"
                    options={QUANTITIES}
                    value={this.state.row.quantity}
                    onChange={this.onSelectQuantity}
                    placeholder={"Select Quantity"}
                />
                </div>
                <div className="col-sm-auto">of</div>
                <div className="col-sm">
                <Select
                    row={row}
                    classNamePrefix="app-select"
                    options={addonsForType}
                    onChange={this.onSelectAddon}
                    placeholder={`Choose a ${type && type.slice(0, -1)}`}
                    value={this.state.row.addon}
                />
                </div>
                <div className="col-sm-auto p-0">
                <button
                    onClick={this.props.removeAddonRow}
                    className="button button-remove--addonrow"
                >
                    <svg width="12px" height="12px" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                        viewBox="0 0 212.982 212.982">
                    <g id="Close">
                        <path fill="#d2d2d2" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312
                        c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312
                        l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937
                        c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/>
                    </g>
                    </svg>
                </button>
                </div>
            </div>   
        )
    }
}

export default AddonRow;