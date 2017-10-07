import React from 'react';
import img from '../static/black.png';

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
      return (<img src={img} alt="suit" className="preloader done"/>)
    } else {
      return this.props.img;
    }
  }

  render() {
    var display = this.getDisplay();
    console.log(display);
    return (
      <div className="center" id="imgholder">
        {display}
      </div>
    );
  }
}

export default Image;
