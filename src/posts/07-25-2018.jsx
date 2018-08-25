import React, { Component } from 'react';
import czech1 from '../img/czech-1/czech-1.jpg';
import czech2 from '../img/czech-1/czech-2.jpg';
import czech3 from '../img/czech-1/czech-3.jpg';
import czech4 from '../img/czech-1/czech-4.jpg';
import czech5 from '../img/czech-1/czech-5.jpg';

class Post8 extends Component {
  render() {
    return (
      <div>
        <h1 className="title-text">A Brief Stay in Czech Republic</h1>
        <div className="post-content pb-2">
          <div className="text-center">
            <a href={czech3} data-lightbox="czech-1" data-title="">
              <img className="img-fluid pb-3" src={czech3} alt="" />
            </a>
          </div>
          <p>{"Ze’ev and I took an 10 hour overnight bus from Ljubljana to Prague so that we would be able to arrive to Berlin by 7/30 and meet our other friends who were joining. We’d then bike 5 days from Prague to Berlin, staying with a Warm Showers host each night. We were excited for this last phase of our bike adventure."}</p>
          <p>{"The bus ride was surprisingly easy: our bikes went on the back of the bus and we got the front seats on the second level so we were able to sleep the entire ride. Hungry and antsy by the time we arrived in Prague, we biked straight to a Pancake Brunch spot, Den Noc, that had very high reviews. It was delicious and everyone in Prague should visit this restaurant. We ordered 1 savory pancake pile and 1 sweet pancake pile: the savory had creme fraiche, an egg, and arugula and the sweet were chocolate pancakes with cherry-rum marmalade and whipped cream. Yum."}</p>
          <p>{"We finished our pancakes by 11:30am and decided it would be a good idea to start our 100km bike ride to the town of Ústí nad Labem. We biked through town on the cobblestone (ugh) and crossed the Charles Bridge which was swarming with tourists. It was so crowded we needed to walk our bikes. We decided that Prague was very pretty and we’d like to visit again, but we’d need to come during the off season. I’d like time to explore all the little streets and learn about the architecture and history, but would want to do it when there were fewer people and it was less hot."}</p>
          <div className="row text-center d-block">
            <a href={czech1} data-lightbox="czech-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={czech1} alt="" />
            </a>
            <a href={czech2} data-lightbox="czech-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={czech2} alt="" />
            </a>
          </div>
          <p>{"Eager to get out of the city, we finally made it out of town and were able to bike a bit faster. In the countryside, it was very hot, flat, and there was little shade so unfortunately biking wasn’t that pleasant. In the little towns that we went through, people spoke very little english and we had a hard time finding places to fill up our water bottles. It seemed like this part of the country had very few tourists passing through, which was surprising and made it a bit difficult to navigate. In the evening, we made it to the Elbe river, which flows for 1,094km  from northern Czech Republic and through all of Germany. We were told that there is a bike path that follows the entire river, which has quite a few bike tourers during the summer. The river zigzagged quite a bit, so we decided to take the more direct route rather than follow the river."}</p>
          <div className="text-center">
            <a href={czech4} data-lightbox="czech-1" data-title="">
              <img className="img-fluid pb-3" src={czech4} alt="" />
            </a>
          </div>
          <p>{"The town of Ústí nad Labem, where we were staying for the night, is on both sides of the Elbe river. While it didn’t seem like there was much going on there, we read that it was the \"modern capital of the region\". We cooked our rice, lentils and zucchini dinner along the river and then headed to the house of our warm showers host. It was nearly dark when we arrived at their house, but our hosts, Tomas and his girlfriend, greeted us at the gate and showed us around their beautiful and spacious garden. Their yard had a pool, covered area, lawn, garden with vegetables and most importantly, a trampoline. He said we can pick our favorite place to sleep, so naturally, we chose the trampoline. We showered, and got in our sleeping bags on the trampoline and slept relatively soundly, since there was a train track right across the street from the garden."}</p>
          <div className="text-center">
            <a href={czech5} data-lightbox="czech-1" data-title="">
              <img className="img-fluid pb-3" src={czech5} alt="" />
            </a>
          </div>
          <p>{"We got up the next morning excited to get into Germany. While Prague seemed interested and our Warm Showers host was very friendly, the rest of the country wasn’t very fun to bike in. It was very hot and communication with the locals was difficult. Germany seemed more familiar and it meant we were one step closer to our final destination!"}</p>
        </div>
      </div>
    );
  }
}

export default Post8;
