import React from 'react';
import img from '../../static/black.png';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.img
    }
    this.getDisplay = this.getDisplay.bind(this);
  }

  getDisplay() {
    if (typeof(this.props.img) === "string") {
      return (
        <div id="imgholder">
          <span className="overimage right fa-stack fa-sm">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
          </span>
          <img src={img} alt="suit" className="preloader done"/>
        </div>
      )
    } else {
      return this.props.img;
    }
  }

  render() {
    var display = this.getDisplay();
    return (
      <div className="center">
        {display}
      </div>
    );
  }
}

export default Image;
