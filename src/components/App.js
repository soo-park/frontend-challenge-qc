import React, { Component } from 'react';
import Body from './Body.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'List',
      items: {},
      currentItem: null,
      languages: []
    };
    this.handleCurrentItem = this.handleCurrentItem.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleCurrentItem(id) {
    this.setState({currentItem: {}});
  }

  handleViewChange(view) {
    this.setState({view: view});
  }

  // later, put API call here
  componentWillMount() {
    this.setState({
      items: this.props.items,
      languages: this.props
    })
  }

  render() {
     return (
      <div>
        <Body
          appState={this.state}
          viewChange={this.handleViewChange}
          currentItemChange={this.handleCurrentItem}
        />
      </div>
    );
  }
}

export default App;
