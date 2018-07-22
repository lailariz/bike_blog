import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
const Jumbotron = require('react-bootstrap/lib/Jumbotron');

class Splash extends Component {
  static propTypes = {
  	postData: PropTypes.shape({
  	  title: PropTypes.string,
  	  date: PropTypes.string,
			img: PropTypes.string,
			link: PropTypes.string, 
  	}),
  }

  render () {
    return (
      <div>
        <Jumbotron className="p-0 text-white rounded bg-dark centered-bg-img" id="jumbotron-splash">
			  	<Link to={this.props.postData.link}>
            <div className={"centered-bg-img " + this.props.postData.img}></div>
			  		<div className="splash-text-container p-3 p-lg-5 mx-auto">
              <h5 className="title-text-sm">{this.props.postData.date}</h5>
              <br />
			  			<h3 className="title-text-md">{this.props.postData.title}</h3>
			  		</div>
			  	</Link>
        </Jumbotron>
      </div>
    );
  }
}

export default Splash;
