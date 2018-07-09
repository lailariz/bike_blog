import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const Jumbotron = require('react-bootstrap/lib/Jumbotron');

class Splash extends Component {
  render () {
    return (
      <div>
        <Jumbotron className="p-0 text-white rounded bg-dark centered-bg-img" id="jumbotron-splash">
			  	<Link to="/post/07-09-2018">
            <div className="centered-bg-img monte-bg-img"></div>
			  		<div className="splash-text-container p-3 p-lg-5 mx-auto">
              <h5 className="title-text-sm">July 9, 2018</h5>
              <br />
			  			<h3 className="title-text-md">Cycling through Montenegro</h3>
			  		</div>
			  	</Link>
        </Jumbotron>
      </div>
    );
  }
}

export default Splash;
