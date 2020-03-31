import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Output from './components/Output'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    }
  }

  addPercentage = (val) => {
    //console.log(val);
    this.setState({
      arr: [...this.state.arr, val]
    })
    console.log(this.state.arr);
  }

  removePercentage = (elem) => {

  }

  calculatePercentage = (val) =>{

  }

  recalculatePercentage = () => {

  }

  calculateBilateral = () => {
    
  }

  render() {
    return (
      <div className="App">
        <div className="Button-wrapper">
          <div className="row">
            <Button id="10" handleClick={this.addPercentage}>10%</Button>
            <Button id="20" handleClick={this.addPercentage}>20%</Button>
            <Button id="30" handleClick={this.addPercentage}>30%</Button>
            <Button id="40" handleClick={this.addPercentage}>40%</Button>
            <Button id="50" handleClick={this.addPercentage}>50%</Button>
          </div>
          <div className="row">
            <Button id="60" handleClick={this.addPercentage}>60%</Button>
            <Button id="70" handleClick={this.addPercentage}>70%</Button>
            <Button id="80" handleClick={this.addPercentage}>80%</Button>
            <Button id="90" handleClick={this.addPercentage}>90%</Button>
            <Button id="100" handleClick={this.addPercentage}>100%</Button>
          </div>
          
          {/* <Output>{this.state.arr}</Output> */}
          <Output items={this.state.arr}/>
        </div>
      </div>
    );
  }
}

export default App;
