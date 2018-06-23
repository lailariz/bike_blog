import React, { Component } from 'react';
import Splash from './Splash';
import StoryGrid from './StoryGrid';

class HomePage extends Component {
  render () {
    return (
      <div className="p-3">
        <Splash />

				<StoryGrid />
      </div>
    );
  }
}

export default HomePage;
