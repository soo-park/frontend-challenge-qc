import React from 'react';
import Card from './Card.js';

const Cards = (props) => {
  
  var items = props.appState.items;
  var languages = props.appState.languages;

  return (
      <div className="row">
        <div className="select-all"> Select All </div>
        {!items.length ? null : items.map((item, key) => {
          return (
            <Card
              item={item}
              key={item.id}
              languages={languages}
              viewChange={props.viewChange}
              currentItemChange={props.currentItemChange}
            />
          )}
        )}
      </div>
  );
}

export default Cards;
