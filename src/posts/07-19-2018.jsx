import React, { Component } from 'react';
import slov2 from '../img/slov-1/slov-2.jpg';
import slov3 from '../img/slov-1/slov-3.jpg';
import slov4 from '../img/slov-1/slov-4.jpg';
//import slov5 from '../img/slov-1/slov-5.jpg';
import slov6 from '../img/slov-1/slov-6.jpg';
import slov7 from '../img/slov-1/slov-7.jpg';
import slov8 from '../img/slov-1/slov-8.jpg';
import slov9 from '../img/slov-1/slov-9.jpg';

class Post6 extends Component {
  render() {
    return (
      <div>
        <h1 className="title-text">Entering Slovenia</h1>
        <div className="post-content pb-2">
          <p>We’ve spent the last 5 days in Slovenia and it’s been the most beautiful part of the trip so far. There have been fewer cars, smaller roads, and more bicyclists than I’ve ever seen on roads. We’ve also took on our biggest climbs and descents yet, eliciting a sense of excitement, accomplishment and adventure:)</p>
          <div className="row text-center d-block">
            <a href={slov8} data-lightbox="slov-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={slov8} alt="" />
            </a>
            <a href={slov9} data-lightbox="slov-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={slov9} alt="" />
            </a>
          </div>
          <p>It has also rained on us for the first time this trip.</p>
          <div className="text-center">
            <a href={slov7} data-lightbox="slov-1" data-title="">
              <img className="img-fluid pb-3" src={slov7} alt="" />
            </a>
          </div>
          <p>We also befriended 3 Canadians, Chase, Teagan, and Ashley, who are biking from Athens to Paris. We learned that they were going the same route as us through Slovenia and we quickly became a biker gang of five for six days.</p>
          <div className="row text-center d-block">
            <a href={slov3} data-lightbox="slov-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={slov3} alt="" />
            </a>
            <a href={slov2} data-lightbox="slov-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={slov2} alt="" />
            </a>
            <a href={slov4} data-lightbox="slov-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={slov4} alt="" />
            </a>
          </div>
    	    <p>After an amazing day of biking through the Istrian Peninsula (and encountering a 18% grade hill so steep we had to walk our bikes), we arrived in Buzet, the last city in Croatia before climbing 2,500 ft to reach the Croatia/Slovenia border. When we finally reached the border around 6pm, the border guards just looked at our passports and with little compassion and a thick English accent, told us that only EU citizens could use this Slovenia entry point. Furthermore, he recommend that we go back down the mountain and use a different border crossing or continue another 25 km to the next border crossing in the mountains. Exhausted from the day, we were absolutely unwilling to go back down the hill and up another one. So, we opted to find a camping spot nearby and continue on to the next border crossing early the next morning.</p>
				<p>Fortunately, we found a beautiful campsite in a grove of trees about 100 yards off the main road. Ze'ev and I cooked up 500grams of pasta and lentils for dinner and sat chatting and laughing with our new friends. Even though we had felt absolutely crushed just hours before while sitting at the border, now we were full of warm food and happy with our new camping companions.</p>
          <div className="text-center">
            <a href={slov6} data-lightbox="slov-1" data-title="">
              <img className="img-fluid pb-3" src={slov6} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post6;
