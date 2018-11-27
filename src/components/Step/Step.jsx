import React, {Component} from "react"

class Step extends Component {
    render() {
        return (
            <div onChange={(e) => console.log(e)}>
                {this.props.children}
            </div>
        )
    }
}


export default Step;
