import React, { Component } from 'react';
import Splash from './Splash';
// import StoryGrid from './StoryGrid';
import ImgStoryGrid from './ImgStoryGrid';

class HomePage extends Component {
  render () {
    const postStack = [
//      {
//    		img: "-bg-img",
//    		title: "",
//    		date: "July , 2018",
//    		link: "/post/07--2018",
//    	},
//      {
//    		img: "-bg-img",
//    		title: "",
//    		date: "July , 2018",
//    		link: "/post/07--2018",
//    	},
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
    		title: "Travelling to Barcelona",
    		date: "July 1, 2018",
    		link: "/post/07-01-2018",
    	},
		];

    return (
      <div>
        <Splash postData={postStack[0]}/>

        <ImgStoryGrid gridData={postStack.slice(1, 3)}/>

        <Splash postData={postStack[3]}/>

        <ImgStoryGrid gridData={postStack.slice(4, 6)}/>

        <Splash postData={postStack[6]}/>
      </div>
    );
  }
}

export default HomePage;
