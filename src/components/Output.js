import React from 'react';
import './Output.css';

const removePercentage = () => {
  console.log("here");
}

const List = props => (
  <div className="percentage-container">
      {
        props.items.map((item, index) => <div className="percentage" key={index}>
        <div className="percentage-text">{item}%</div>
        <button className="exit" onClick={removePercentage}><span>X</span></button>
        </div>)
      },
  </div>
);

export default List;

