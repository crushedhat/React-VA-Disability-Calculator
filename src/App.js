import React, { Component } from 'react';
import Input from './components/Input';
import Output from './components/Output';
import "./bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  state={
    items:[],
    item: '',
  }
  handleClick = e => {
    // console.log(e.target.value);
    const newItem = {
      title: e.target.value
    }
    const updatedItems = [...this.state.items, newItem]; //similiar to push
    this.setState({ //appending new array and resetting state
      items:updatedItems,
      item:'',
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;