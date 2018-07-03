import React, { Component } from 'react';

class ImgStoryGrid extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-0 pb-3 pr-md-3">
            <div className="my-3 bg-img-test"></div>
            <div className="splash-text-container p-3 p-lg-5 mx-auto">
              <h5 className="title-text-sm">June 24, 2018</h5>
              <br />
              <h4 className="title-text-md">Another headline</h4>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 p-0 pb-3 pl-md-3">
            <div className="my-3 bg-img-test"></div>
            <div className="splash-text-container p-3 p-lg-5 mx-auto">
              <h5 className="title-text-sm">June 24, 2018</h5>
              <br />
              <h4 className="title-text-md">Another headline</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImgStoryGrid;
