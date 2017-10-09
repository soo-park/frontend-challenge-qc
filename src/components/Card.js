import React from 'react';
import Image from './Image.js';
import Spinner from "react-svg-spinner";

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

var loadingSpinner = (
  <div className="preloader loading">
    <Spinner
      size="30px"
      height="30px"
      width="30px"
      color="grey"
      thickness={5}
      gap={3}
      speed="slow"
    />
  </div>
);

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Creative Loading ...",
      images: [loadingSpinner],
      id: null
    };
  }

  // temporary mock loading for delay
  componentWillMount() {
    setTimeout(() => {
       this.setState({
         images: this.props.item.images,
         name: this.props.item.name,
         id: this.props.item.id
        });
      },
      5000
    );
  }

  render() {

    return (
      <div className="col-lg-3 col-md-3 col-sm-12" >
        <div className="card h-100">

          {/* card top component */}
          <div className="card-element card-top ">
            <span className="card-checkbox">
              <input type="checkbox" id="card-checkbox"/>
              <span htmlFor="card-checkbox" className="text-black"> {this.state.name} </span>
            </span>
            <span className="right">
              <span className="trash-icon clickable" />
            </span>
          </div>

          {/* card body component */}                
          <div className="card-body">

            {/* card image component */}                
            <Image images={this.state.images} />

            {/* card id component */}                
            {this.state.id ? (
            <div className="card-element">
              <div>{this.state.name} Creative ID</div>
              <div className="text-black">{this.state.id}</div>
            </div>) : null}

            {/* card name component */}                                            
            <div className="card-element">
              <div>Creative Name</div>
              <input type="text" className="form-control card-input" placeholder={this.state.name}/>
            </div>

            {/* card language component */}                                            
            <div className="card-element language">
              <div>
                Language
              </div>
              <select className="form-control">
                {this.props.languages.map((language, key) => (<option key={key}>{language}</option>))}
              </select>
            </div>

            {/* card bottom component */}                          
            <div className="card-footer card-element add-impression">
              <a className="clickable">Add Impression Tracker</a>
            </div>
            
          {/* card-body */}
          </div>
        {/* card h-100 */}
        </div>
      {/* card dynamic width col- */}
      </div>
    );
  }
}

export default Card;
