import React from 'react';
import Cards from './Cards.js';
import TopBar from './TopBar.js';

const Board = (props) => {
  return (
    <div className="board">
      <div className="container">
        <TopBar />
        <Cards 
          appState={props.appState}
          viewChange={props.viewChange}
          currentItemChange={props.currentItemChange}
        />
      </div>
    </div>
  );
}

export default Board;
