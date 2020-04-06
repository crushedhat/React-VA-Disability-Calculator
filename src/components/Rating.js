import React, { Component } from "react";

class Rating extends Component {
    render(){
        const {combined, total} = this.props;
        return (
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center">{combined}%</li>
                    <li className="list-group-item text-center">{total}%</li>
                </ul>
            </div>
        )
    }
}
export default Rating;
