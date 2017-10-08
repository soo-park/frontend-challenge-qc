import React from 'react';

const CardTop = (props) => {
  return (
    <div className="card-element">
      <span>
        <input type="checkbox" className="css-checkbox" id="checkbox"/>
        <span className=""> Creative Loading...</span>
      </span>
        
      <span className="right">
        <span className="trash-icon" />
      </span>
    </div>
  );
}

export default CardTop;
