import React, { Componenet, Component } from 'react';
import './Output.css';

class Output extends Component {
    render() {
        return(
            <div className="output">
                {this.props.children}
            </div>
        );
    }
}

export default Output;