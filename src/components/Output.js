import React, { Component } from 'react';
//import Percent from './Percent';
import uuid from 'react-uuid';
/* import './Output.css'; */

class List extends Component {
  render() {
    const {items, deleteItem} = this.props
    return (
      <ul className="list-group my-5">
          <h3 className="text-capitalize text-center"></h3>
            {
      
              items.map(item => { 
                return(
                  <li className="list-group-item text-capitalize my-2" key={uuid()}>
                    <h6>{item.percent}%</h6>
                    <button className="deleteItem" onClick={deleteItem}>Delete</button>
                  </li>
                )
              })
            }
      </ul>
    )
  }
}

export default List;

