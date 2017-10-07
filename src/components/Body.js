import React from 'react';
import Board from './Board.js';

const Body = (props) => {
  return (
    <div className="allscreen">
      <Board 
        appState={props.appState}
        viewChange={props.viewChange}
        currentItemChange={props.currentItemChange}
      />
    </div>
  );
}

export default Body;
