import React, { Component } from 'react';

const style = {
  width: "80%",
  height: "300px",
  borderRadius: "21px 21px 0 0"
};

class StoryGrid extends Component {
  render () {
    return (
      <div className="d-md-flex flex-md-equal w-100 my-md-3">
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden flex-fill">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-light box-shadow mx-auto" style={style}></div>
        </div>
        <div className="bg-light px-3 pt-md-5 text-center overflow-hidden flex-fill">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-dark box-shadow mx-auto" style={style}></div>
        </div>
      </div>
    );
  }
}

export default StoryGrid;
