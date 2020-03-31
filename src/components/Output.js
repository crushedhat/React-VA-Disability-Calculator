import React from 'react';
import './Output.css';

const List = props => (
  <div className="percentage-container">
      {
        props.items.map((item, index) => <div className="percentage" key={index}>
        <div className="percentage-text">{item}%</div>
        <button className="exit"><span>X</span></button>
        </div>)
      },
  </div>
);

export default List;

