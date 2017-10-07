import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var img = '../static/black.png';

/* hard coded data hoisted. Delete after connecting to api*/
const items = [
  { name: 'Black Suit', id: 123451, images: {0: img, 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Midnight Navy Suit', id: 123452, images: {0: img, 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Grey Suit', id: 123453, images: {0: img, 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Dark Brown Suit', id: 123454, images: {0: img, 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Pitch Black Suit', id: 123455, images: {0: img, 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Deeper Grey Suit', id: 123456, images: {0: img, 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Herringbon Suit', id: 123457, images: {0: img, 1: "", 2: ""}, reaction: {}, selected: false, trashed: false}
];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));
registerServiceWorker();

