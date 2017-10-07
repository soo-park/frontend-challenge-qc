import React from 'react';
import Cards from './Cards.js';
import TopBar from './TopBar.js';

const Board = (props) => {
  return (
    <div className="board">
      <TopBar />
      <div className="container">
        {/* <div className="col-lg-12"> */}
          <Cards 
            appState={props.appState}
            viewChange={props.viewChange}
            currentItemChange={props.currentItemChange}
          />
        </div>
      {/* </div> */}
    </div>
  );
}

export default Board;
