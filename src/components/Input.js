import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    render() {
        const {handleClick} = this.props
        return (
            <div className="container-fluid">
                <button value="10" onClick={handleClick}>10%</button>
                <button value="20" onClick={handleClick}>20%</button>
                <button value="30" onClick={handleClick}>30%</button>
                <button value="40" onClick={handleClick}>40%</button>
                <button value="50" onClick={handleClick}>50%</button>
                <button value="60" onClick={handleClick}>60%</button>
                <button value="70" onClick={handleClick}>70%</button>
                <button value="80" onClick={handleClick}>80%</button>
                <button value="90" onClick={handleClick}>90%</button>
                <button value="100" onClick={handleClick}>100%</button>
            </div>
        );
    }
}

export default Input;