import React from 'react';

const CardTop = (props) => {
  return (
    <div className="card-element Aligner">
      <span className="Aligner-item left">
        <input type="checkbox" className="css-checkbox" id="checkbox"/>
        <span className=""> Creative Loading...</span>
      </span>
        
      <span className="Aligner-item right">
        <span className="trash-icon" />
      </span>
    </div>
  );
}

export default CardTop;
