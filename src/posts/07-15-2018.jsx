import React, { Component } from 'react';
import split1 from '../img/split-1/split-1.jpg';
import split2 from '../img/split-1/split-2.jpg';
import split3 from '../img/split-1/split-3.jpg';
import split4 from '../img/split-1/split-4.jpg';
import split5 from '../img/split-1/split-5.jpg';
import split6 from '../img/split-1/split-6.jpg';
import split7 from '../img/split-1/split-7.jpg';
import split8 from '../img/split-1/split-8.jpg';
import split9 from '../img/split-1/split-9.jpg';
import split10 from '../img/split-1/split-10.jpg';
import split11 from '../img/split-1/split-11.jpg';
import split12 from '../img/split-1/split-12.jpg';
import split13 from '../img/split-1/split-13.jpg';

class Post5 extends Component {
  render() {
    return (
      <div>
        <h1 className="title-text">New Friends</h1>
        <div className="post-content pb-2">
          <p>We spent the next 2 days in Split, Croatia with two new friends, Kate and Mitch. Kate and Mitch are from Oakland and are friends of Annalyse and Matt who are also coming to Berlin. Annalyse and Matt put us in touch with them since they were traveling to the Balkan islands and were interested in joining us for our bike ride. While they weren’t able to bike with us, we decided to meet up and hang in Split for a couple days. </p>
          <div className="text-center">
            <a href={split13} data-lightbox="split-1" data-title="">
              <img className="img-fluid pb-3" src={split13} alt="" />
            </a>
          </div>
    	    <p>Split was bustling with summer tourists as we explored Diocletian’s Palace and Split’s main promenade the first morning. Instead of staying in the crowded downtown, the first day we decided to leave the main town and walk an hour to northern peninsula with parks and beaches.</p>
          <div className="row text-center d-block">
            <a href={split7} data-lightbox="split-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={split7} alt="" />
            </a>
            <a href={split2} data-lightbox="split-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={split2} alt="" />
            </a>
          </div>
					<p>The second day we took a ferry to Brač. We swam, read our books and practiced our jumps into the water. </p>
          <div className="text-center">
            <a href={split8} data-lightbox="split-1" data-title="">
              <img className="img-fluid pb-3" src={split8} alt="" />
            </a>
          </div>
          <div className="row text-center d-block">
            <a href={split9} data-lightbox="split-1" data-title="">
              <img className="img-fluid col-3 pb-3" src={split9} alt="" />
            </a>
            <a hidden href={split10} data-lightbox="split-1" data-title="">
              <img className="img-fluid col-3 pb-3" src={split10} alt="" />
            </a>
            <a href={split11} data-lightbox="split-1" data-title="">
              <img className="img-fluid col-3 pb-3" src={split11} alt="" />
            </a>
            <a href={split12} data-lightbox="split-1" data-title="">
              <img className="img-fluid col-3 pb-3" src={split12} alt="" />
            </a>
          </div>
    	    <p>In the evenings, we posted up at the city’s public viewing of the Quarterfinal World Cup Games: France v Belgium and Croatia v England. Thousands of people squished together in the park, everyone wearing red checkered jerseys, hats and flags. The energy was contagious.  You could feel the nerves, excitement and pride in everyone. When the Croatia scored, the city exploded. When they won in overtime, fireworks and flares were set off, people were dancing, hugging and crying, and beer were thrown up into the air.  In the park, they played punk rock songs in Croatian that everyone was singing at the top of their lungs. It was wild. We heard cars honking and people celebrating until the early morning. The next day as we biked 90 miles from Split to Zadar, bars were full at 10 in the morning with people celebrating and the majority of people we saw were wearing Croatia jerseys. The whole country seemed to be celebrating and happy.</p>
          <div className="row text-center d-block">
            <a href={split3} data-lightbox="split-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={split3} alt="" />
            </a>
            <a href={split4} data-lightbox="split-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={split4} alt="" />
            </a>
            <a href={split5} data-lightbox="split-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={split5} alt="" />
            </a>
            <a href={split6} data-lightbox="split-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={split6} alt="" />
            </a>
            <a href={split1} data-lightbox="split-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={split1} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post5;
