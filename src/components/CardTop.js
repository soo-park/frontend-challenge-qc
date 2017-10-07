import React from 'react';

const CardTop = (props) => {
  return (
    <div className="card-top Aligner">
      <span className="Aligner-item left">
        <input type="checkbox" class="css-checkbox" id="checkbox"/>
        <label for="checkbox" name="checkbox_lbl" class="check">Creative Loading...</label>
      </span>
        
      <span className="Aligner-item right">
        <span className="fawesome trash-icon" />
      </span>
    </div>
  );
}

export default CardTop;
