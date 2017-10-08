import React from 'react';

const CardTop = (props) => {
  return (
    <div className="card-element card-top">
      <span className="card-checkbox">
        <input type="checkbox" id="card-checkbox"/>
        <span htmlFor="card-checkbox"> Creative Loading...</span>
      </span>
        
      <span className="right">
        <a><span className="fawesome trash-icon" /></a>
      </span>
    </div>
  );
}

export default CardTop;
