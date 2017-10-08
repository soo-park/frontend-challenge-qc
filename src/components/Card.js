import React from 'react';
import Spinner from './Common/Spinner.js';
import Image from './Common/Image.js';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Creative Loading ...",
      image: <Spinner />,
      id: null
    };
  }

  // temporary mock loading for delay
  // later, substitute by making API call in CardS
  componentWillMount() {
    setTimeout(() => {
       this.setState({
         image: this.props.item.images[0],
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

            <div className="card-element card-top ">
              <span className="card-checkbox">
                <input type="checkbox" id="card-checkbox"/>
                <span htmlFor="card-checkbox" className="text-black"> {this.state.name} </span>
              </span>
                
              <span className="right">
                <a><span className="fawesome trash-icon" /></a>
              </span>
            </div>

            <div className="card-body">
              
              <Image img={this.state.image}/>

              {this.state.id ? 
                (<div className="card-element">
                  <div>{this.state.name} Creative ID</div>
                  <div className="text-black">{this.state.id}</div>
                </div>)                
              : null}
                            
              <div className="card-element">
                <div>Creative Name</div>
                <input type="text" className="form-control card-input" placeholder={this.state.name}/>
              </div>

              <div className="card-element">
                <div>
                  Language
                </div>
                <select className="form-control">
                  {this.props.languages.map((language, key) => (<option key={key}>{language}</option>))}
                </select>
              </div>

              <div className="card-footer card-element add-impression">
                <a>Add Impression Tracker</a>
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Card;
