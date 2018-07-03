import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const Jumbotron = require('react-bootstrap/lib/Jumbotron');

class Splash extends Component {
  render () {
    return (
      <Jumbotron className="p-0 text-white rounded bg-dark centered-bg-img" id="jumbotron-splash">
				<Link className="unstyled-link" to="/post">
					<Link to="/post/07-01-2018">
            <div className="centered-bg-img bg-img"></div>
          </Link>
					<div className="splash-text-container p-3 p-lg-5 mx-auto">
            <h5 className="title-text-sm">June 24, 2018</h5>
            <br />
						<h3 className="title-text">Post Title</h3>
					</div>
				</Link>
      </Jumbotron>
    );
  }
}

export default Splash;
