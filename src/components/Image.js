import React from 'react';
import img from '../static/wedding-suit_Clipart_svg_File.svg';

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
