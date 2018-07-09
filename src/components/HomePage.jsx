import React, { Component } from 'react';
import Splash from './Splash';
// import StoryGrid from './StoryGrid';
import ImgStoryGrid from './ImgStoryGrid';

class HomePage extends Component {
  render () {
    return (
      <div>
        <Splash />

	      <ImgStoryGrid />
      </div>
    );
  }
}

export default HomePage;
