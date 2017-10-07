import React from 'react';
import Spinner from './Spinner.js';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.item.images[0]
    };
  }

  // temporary mock loading for delay, later, put API call here
  componentWillMount() {
    setTimeout(() => {
       console.log(this.props.item.images);
      },
      5000
    );
  }

  render() {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card h-100">
            <div className="center" id="imgholder">
              <Spinner />
            </div>
            <div className="card-body">
            <h4 className="card-title">
              <a>Item One</a>
            </h4>

            <h5>$24.99</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
