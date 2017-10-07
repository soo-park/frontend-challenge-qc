import React from 'react';
import Card from './Card.js';

const Cards = (props) => {
  var items = props.appState.items;
  return (
      <div className="row">
        {!items.length? null : items.map((item, key) => <Card item={item} key={item.id}/>)}
      </div>
  );
}

export default Cards;
