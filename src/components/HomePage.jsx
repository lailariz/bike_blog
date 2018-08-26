import React, { Component } from 'react';
import Splash from './Splash';
// import StoryGrid from './StoryGrid';
import ImgStoryGrid from './ImgStoryGrid';

class HomePage extends Component {
  render () {
    const postStack = [
      {
    		img: "germany2-bg-img",
    		title: "Wilcommen a Berlin",
    		date: "August 1, 2018",
    		link: "/post/08-01-2018",
    	},
      {
    		img: "germany1-bg-img",
    		title: "Warm Showers in Deutschland",
    		date: "July 28, 2018",
    		link: "/post/07-28-2018",
    	},
      {
    		img: "czech-bg-img",
    		title: "A Brief Stay in Czech Republic",
    		date: "July 25, 2018",
    		link: "/post/07-25-2018",
    	},
      {
    		img: "ljubljana-bg-img",
    		title: "Ljubljiana: Dragons and Ice Cream",
    		date: "July 23, 2018",
    		link: "/post/07-23-2018",
    	},
      {
    		img: "slov2-bg-img",
    		title: "Terrific Triglav",
    		date: "July 22, 2018",
    		link: "/post/07-22-2018",
    	},
      {
    		img: "slov-bg-img",
    		title: "Entering Slovenia",
    		date: "July 19, 2018",
    		link: "/post/07-19-2018",
    	},
      {
    		img: "mali-bg-img",
    		title: "Laurence and Vladimir",
    		date: "July 17, 2018",
    		link: "/post/07-17-2018",
    	},
      {
    		img: "split-bg-img",
    		title: "New Friends",
    		date: "July 15, 2018",
    		link: "/post/07-15-2018",
    	},
      {
    		img: "kor-bg-img",
    		title: "Biking Korčula",
    		date: "July 12, 2018",
    		link: "/post/07-12-2018",
    	},
      {
    		img: "monte-bg-img",
    		title: "Cycling through Montenegro",
    		date: "July 9, 2018",
    		link: "/post/07-09-2018",
    	},
      {
    		img: "croatia-bg-img",
    		title: "Our First Night in Croatia",
    		date: "July 8, 2018",
    		link: "/post/07-08-2018",
    	},
      {
    		img: "barcelona-bg-img",
    		title: "Travelling to Europe",
    		date: "July 1, 2018",
    		link: "/post/07-01-2018",
    	},
		];

    return (
      <div>
        <Splash postData={postStack[0]}/>

        <ImgStoryGrid gridData={postStack.slice(1, 3)}/>

        <Splash postData={postStack[3]}/>
        <Splash postData={postStack[4]}/>

        <ImgStoryGrid gridData={postStack.slice(5, 7)}/>
        <ImgStoryGrid gridData={postStack.slice(7, 9)}/>

        <Splash postData={postStack[9]}/>

        <ImgStoryGrid gridData={postStack.slice(10, 12)}/>
      </div>
    );
  }
}

export default HomePage;
