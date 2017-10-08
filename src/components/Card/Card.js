import React from 'react';
import Spinner from '../Common/Spinner.js';
import CardTop from './CardTop.js';
import Image from './Image.js';
import CardLanguage from './CardLanguage.js';
import CardBottom from './CardBottom.js';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: <Spinner />
    };
  }

  // temporary mock loading for delay
  // later, substitute by making API call in CardS
  componentWillMount() {
    setTimeout(() => {
       this.setState({image: this.props.item.images[0]});
      },
      5000
    );
  }  

  render() {
    return (
      <div className="col-lg-3 col-md-3 col-sm-12" >
          <div className="card h-100">
            <CardTop />
            <div className="card-body">
              <Image img={this.state.image}/>
              <div className="card-element">
                <div>Creative Name</div>
                <input type="text" placeholder={this.props.item.name}/>              </div>
              <CardLanguage />
              <CardBottom />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
