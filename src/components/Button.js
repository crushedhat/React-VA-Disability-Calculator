import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <div id={this.props.id} className='button' onClick={() => this.props.handleClick(this.props.id)}>
                {this.props.children}
            </div>
        );
    }
}

export default Button;