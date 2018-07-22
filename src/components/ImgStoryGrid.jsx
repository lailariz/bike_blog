import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class ImgStoryGrid extends Component {

  static propTypes = {
		gridData: PropTypes.arrayOf(PropTypes.shape({
  	  title: PropTypes.string,
  	  date: PropTypes.string,
			img: PropTypes.string,
			link: PropTypes.string, 
  	})),
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0 pb-3 pr-md-3">
			  	  <Link to={this.props.gridData[0].link}>
              <div className={"centered-bg-img " + this.props.gridData[0].img}></div>
			  	  	<div className="splash-text-container p-3 p-lg-5 mx-auto">
                <h5 className="title-text-sm">{this.props.gridData[0].date}</h5>
                <br />
                <h4 className="title-text-md">{this.props.gridData[0].title}</h4>
              </div>
			  	  </Link>
          </div>
          <div className="col-md-6 col-sm-12 p-0 pb-3 pl-md-3">
			  	  <Link to={this.props.gridData[1].link}>
              <div className={"centered-bg-img " + this.props.gridData[1].img}></div>
			  	  	<div className="splash-text-container p-3 p-lg-5 mx-auto">
                <h5 className="title-text-sm">{this.props.gridData[1].date}</h5>
                <br />
                <h4 className="title-text-md">{this.props.gridData[1].title}</h4>
			  	  	</div>
			  	  </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgStoryGrid;
