import React, { Component } from 'react';
import Input from './components/Input'
import "./bootstrap/dist/css/bootstrap.min.css"
import uuid from 'uuid/v4' 
/* import './App.css';
import Button from './components/Button'
import Output from './components/Output'
import uuid from 'uuid/v4'  */

class App extends Component {
  state={
    percentages:[],
    percent:'',
    id:uuid()
  }
  handleClick = e => {
    console.log(e.target.value);
    this.setState = {
      percent: e.target.value
    };
    
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <Input handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;