import React, { Component } from 'react';
import Input from './components/Input';
import Output from './components/Output';
import Rating from './components/Rating'
import "./bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  state={
    items:[],
    item: '',
    combinedRating: 0,
    totalRating: 0,
    bilateralPercentage: 0
  }
  handleClick = e => {
    this.calculatePercentage(e.target.value)
    const newItem = {
      title: parseInt(e.target.value)
    }
    const updatedItems = [...this.state.items, newItem];
    this.setState({ 
      items:updatedItems,
      item:'',
    });
  }
  handleCheckbox = e => {
    //
  }
  calculatePercentage = (val) => {
    let ratingChange = this.state.combinedRating+(100-this.state.combinedRating)*(parseInt(val)/100)
    console.log(ratingChange)
    let newCombined = Math.round(ratingChange);
    let newTotal = Math.round(ratingChange/10) * 10;
    this.setState({
      combinedRating: newCombined,
      totalRating: newTotal
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <Input handleClick={this.handleClick}/>
            <h3 className="text-capitalize text-center">Output</h3>
            <Output items={this.state.items} />
            <h3 className="text-capitalize text-center">ratings</h3>
            <Rating combined={this.state.combinedRating} total={this.state.totalRating}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;