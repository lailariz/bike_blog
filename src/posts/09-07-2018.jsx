import React, { Component } from 'react';
import picture1 from '../img/meta-1/diablo1.jpg';
import picture3 from '../img/meta-1/perspective-1.jpg';
import picture4 from '../img/meta-1/perspective-2.jpg';
import picture5 from '../img/meta-1/slovenia.jpg';
import picture6 from '../img/meta-1/Hawk.jpg';
import picture7 from '../img/meta-1/slovenia-2.jpg';

class Post13 extends Component {
  render() {
    return (
      <div>
        <h1 className="title-text">Top 3 Reasons to Love Bike Touring</h1>
        <div className="post-content pb-2">
          <div className="text-center">
            <a href={picture1} data-lightbox="picture-1" data-title="">
              <img className="img-fluid pb-3" src={picture1} alt="" />
            </a>
          </div>
          <p>{"Bike touring is one of my favorite ways to travel and see the world. My most memorable vacations have been while bicycle touring, and I want to share this amazing way to travel with everyone. Here are the top three reasons why I love bike touring:"}</p>
          <p className="list-in-div"><strong>1. Bicycle touring gives you a totally unique perspective on the places you’re cycling past.</strong> On a bike, you’re going faster than walking but slower than cars. Because of this, you get a deeper understanding of the places you’re traveling through and people that you meet. You can stop at little stands on the side of the road to buy peaches, hang out at a local coffee shop, or get off your bike and take a picture. People stop and talk to you, ask you about what you’re doing and where you’re coming from. When touring, you’re traveling for the journey rather than for the destination.</p>
          <div className="row text-center d-block">
            <a href={picture3} data-lightbox="picture-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={picture3} alt="" />
            </a>
            <a href={picture4} data-lightbox="picture-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={picture4} alt="" />
            </a>
          </div>
          <p className="list-in-div"><strong>2. Bicycle touring can make you feel more alive, happy and energetic than other forms of travel.</strong> You’re exercising and releasing endorphins all day. You are outdoors, getting vitamin D and breathing fresh air. You are challenged on big climbs and are overwhelmed with adrenaline on the downhills. You can pass through coastal towns, farm land, dense forests, and up and over mountains on the same day. You will feel more connected to and in awe of these places than you would if traveling by car or foot.</p>
          <div className="text-center">
            <a href={picture5} data-lightbox="picture-1" data-title="">
              <img className="img-fluid pb-3" src={picture5} alt="" />
            </a>
          </div>
          <p className="list-in-div"><strong>3. You can curate each trip to be as expensive and comfortable as you want it to be. </strong>You can choose to carry all your food and sleeping gear for a cheaper journey with a heavier load. Or, you can stay in hotels and eat all meals at restaurants for a lighter, faster and more expensive trip. You can go for one night or for one month. Either way, you’re bound for a great ride with unforgettable scenery and amazing people. </p>
          <div className="row text-center d-block">
            <a href={picture6} data-lightbox="picture-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={picture6} alt="" />
            </a>
            <a href={picture7} data-lightbox="picture-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={picture7} alt="" />
            </a>
          </div>
          <p>{"Have a bike and want to try it out? California is a great place to do this. You can plan your ride around different bakeries or wineries in Sonoma or find epic viewpoints along the coast. There are hiker-biker sites all around the state, which are $5/person per night and the campsite can’t turn you away. This makes bicycle touring a fantastic spontaneous weekend activity.  Check out Nat.ai to find the perfect route for you."}</p>
          <p>{"Best of luck! You'll be hooked."}</p>
        </div>
      </div>
    );
  }
}

export default Post13;
