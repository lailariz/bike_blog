import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ImgStoryGrid extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0 pb-3 pr-md-3">
			  	  <Link to="/post/07-01-2018">
              <div className="centered-bg-img barcelona-bg-img"></div>
			  	  	<div className="splash-text-container p-3 p-lg-5 mx-auto">
                <h5 className="title-text-sm">July 1, 2018</h5>
                <br />
			  	  		<h3 className="title-text-md">Kindness in Barcelona</h3>
			  	  	</div>
			  	  </Link>
          </div>
          <div className="col-md-6 col-sm-12 p-0 pb-3 pl-md-3">
			  	  <Link to="/post/07-08-2018">
              <div className="centered-bg-img croatia-bg-img"></div>
			  	  	<div className="splash-text-container p-3 p-lg-5 mx-auto">
                <h5 className="title-text-sm">July 8, 2018</h5>
                <br />
                <h4 className="title-text-md">Our First Night in Croatia</h4>
              </div>
			  	  </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgStoryGrid;
