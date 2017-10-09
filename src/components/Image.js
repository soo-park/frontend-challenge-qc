import React from 'react';
import img from '../static/wedding-suit_Clipart_svg_File.svg';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multipleImages: false
    };
  }
  
  changeViewByNumberOfImages(images) {
    let imagesLength = Object.keys(images).length;
    if (imagesLength > 1) {
      return (
        <div id="imgholder">
          <span className="overimage right fa-stack fa-sm">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
          </span>
          <img src={img} alt="suit" className="preloader done suit-image"/>
          <img src={img} alt="suit" className="preloader done suit-image"/>
          <div className="overimage-bar">
            <span className="clickable">{imagesLength} Sets - View All</span>
            <i className="fa fa-chevron-right right clickable" />
          </div>
        </div>
      )
    } else {
      return (
        <div id="imgholder">
          <span className="overimage right fa-stack fa-sm">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
          </span>
          <img src={img} alt="suit" className="preloader done suit-image"/>
        </div>
      )
    }
  }
  
  getDisplay(images) {
    if (typeof(images[0]) === "string") {
      return this.changeViewByNumberOfImages(images)
    } else {
      return images[0];
    }
  }

  render() {
    return (
      <div className="center">
        {this.getDisplay(this.props.images)}
      </div>
    )
  }
}

export default Image;
