import React, { Component } from 'react';
import Card from './Card.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'List',
      items: {},
      currentItem: null,
      languages: []
    };
  }

  componentWillMount() {
    this.setState({
      items: this.props.items,
      languages: this.props.languages
    })
  }

  render() {
    var items = this.state.items;
    var languages = this.state.languages;
    var itemsLength = this.state.items.length;
  
    return (
      <div className="board">

        {/* menu component */}
        <div className="menu">
          <span className="menu-brand left">CRIATIVES<span className="card-counter">{itemsLength}</span></span>
          <div className="right">
            <span className="menu-item clickable"><span className="upload-top-menu-icon"/> Upload</span>
            <span className="menu-item clickable"><span className="add-top-menu-icon"/> Add</span>
          </div>
        </div>

        {/* cards component */}
        <div className="container">
          <div className="row">
            <div className="select-all"> <span className="clickable">Select All</span> </div>
            {!items.length ? null : items.map((item, key) => {
              return (<Card item={item} key={item.id} languages={languages} />)}
            )}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
