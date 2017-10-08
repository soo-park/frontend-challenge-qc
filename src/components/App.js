import React, { Component } from 'react';
import Cards from './Cards.js';

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
      languages: this.props.languages
    })
  }

  render() {
     return (
      <div>
        <div className="allscreen">
          <div className="board">
            <div className="navbar navbar-default" role="navigation">
              <a className="navbar-brand" >CRIATIVES</a>
              <div className="navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#about"><span className="upload-top-menu-icon"/> Upload</a>
                  </li>
                  <li>
                    <a href="#contact"><span className="add-top-menu-icon"/> Add</a>
                  </li>
                  <li>
                    <a> </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container">
              <Cards 
                appState={this.state}
                viewChange={this.handleViewChange}
                currentItemChange={this.handleCurrentItem}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
