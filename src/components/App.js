import React, { Component } from 'react';
import Card from './Card.js';

/* 

Usually, the code will have more components to make the eniter app modulized.
However, Codepen was requested to be used to submit the code.
Since Codepen allows only 10 files for free account unless you pay annual fee,
the following list of things are adjusted to accomodate:

- Components and helper functions were consolidated to fit into the limitation.
- Redux, Thunk, Sass could not be used because they need more files
- README.md could not be generated (thus, these comment lines)
- Since Codepen does not allow any media only one SVG image was used
- The mock api server file generated was substituted with hard-coded data

*/


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
