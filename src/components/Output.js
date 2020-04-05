import React, { Component } from 'react';
import Percent from './Percent';
import uuid from 'react-uuid';
/* import './Output.css'; */

class List extends Component {
  render() {
    const {items} = this.props
    return (
      <ul className="list-group my-5">
          <h3 className="text-capitalize text-center"></h3>
            {
              items.map(item => { 
                return(
                    <Percent key={uuid()} title={item.title} />
                )
              })
            }
      </ul>
    )
  }
}

export default List;

