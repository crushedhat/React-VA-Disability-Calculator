import React, { Component } from "react";

class Percent extends Component {
    render(){
        const {title} = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
            </li>
        )
    }
}
export default Percent;
