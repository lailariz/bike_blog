import React, { Component } from 'react';
import kor0 from '../img/kor-1/kor-0.jpg';
import kor1 from '../img/kor-1/kor-1.jpg';
import kor2 from '../img/kor-1/kor-2.jpg';
import kor3 from '../img/kor-1/kor-3.jpg';
import kor4 from '../img/kor-1/kor-4.jpg';
import kor5 from '../img/kor-1/kor-5.jpg';
import kor6 from '../img/kor-1/kor-6.jpg';
import kor7 from '../img/kor-1/kor-7.jpg';
import kor8 from '../img/kor-1/kor-8.jpg';

class Post4 extends Component {
  render() {
    return (
      <div>
        <h1 className="title-text">Biking Korčula</h1>
        <div className="post-content pb-2">
          <p>We arrived in Croatia 5 days ago (July 7th) and have been loving our time here. We’ve had some sweet bike rides, had some lovely off days with new friends, and watched all the World Cup games with the locals. Unfortunately, it is high tourist season so everything is more expensive and there are SO many people. It seems that everyone in Europe comes on holiday here in July and August and more and more people from the US are discovering it as well.</p>
    	    <p>{"Biking has been exceptional on the Croatian islands. Biking has been a bit less enjoyable on mainland Croatia because there are so many people and roads are busier. We’ve also inconveniently learned that there are roads that show up on google maps, but are actually gravel or have a locked gate in front of them."}</p>
    	    <p>{"We started our adventure in Croatia by crossing the Bosnia and Herzegovina/Croatia border and descending in to Dubrovnik. Dubrvonik was hot and swarming with tourists, so we quickly got on a ferry to Korčula. We decided on Korčula because it was big enough to bike on, had a nice koral road, and was between Dubrovnik and Split (our next destination)."}</p>
          <div className="text-center">
            <a href={kor1} data-lightbox="kor-1" data-title="">
              <img className="img-fluid pb-3" src={kor1} alt="" />
            </a>
          </div>
    	    <p>{"When you get off ferries on Croatian islands, you are often greeted by people who are trying to rent you an apartment, or “sobe”, for the night. Upon arrival in Korčula, we met ‘Tony Montana’ who after a bit of bargaining, showed us a studio apartment for $40 for the night. It was simple, quiet and clean; we said yes. Tony Montana gave us keys and a list of recommendations for Korčula, including the best bakery in town and a local wine bar where we should watch the Quarterfinal Croatia v Russia soccer game. We then sat on the pier, bought 2 bottles of beer and 4 potato bureks and waited for the game to start."}</p>
          <div className="row text-center d-block">
            <a href={kor0} data-lightbox="kor-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={kor0} alt="" />
            </a>
            <a href={kor3} data-lightbox="kor-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={kor3} alt="" />
            </a>
            <a href={kor2} data-lightbox="kor-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={kor2} alt="" />
            </a>
          </div>
    	    <p>{"We watched the game from the wine bar that Tony Montana recommended which was fancier and smaller than we excepted, but we somehow ended up sitting between two people, so we were stuck there. We bought a bottle of nice wine and sat with the Croats, unable to understand a word of what they were saying. The game got more intense and we all got tipsier. When the game went into overtime and PKs, everyone was jumping out of their seats and yelling at the television. The entire town erupted with cheers and chants when they won on the last PK. It was an joyful and proud atmosphere and we were beyond excited to be there. "}</p>
          <p>We were slightly hungover and tired the next morning, so we took it slow, ate some more pastries, and walked around town. We then hopped on our bikes and headed to the costal road to explore. It was hilly but beautiful. We biked 40 miles along the coast, through wineries and olive groves, and even passed 20 people on a a Backroads Bike Tour. We stopped for a long picnic lunch and swam in the small town of Zitna before looking for a campsite for the night. We found a campsite about 50 ft off a small road with views of the sea and several wineries in the valley. We climbed in the tent just after the sunset, but it took me a bit to fall asleep because the crickets were so loud.</p>
    	    <p>{"The next day, we woke up early to bike the last 20 miles to the town on the opposite end of the island, Vela Luca, so we could make the 1pm ferry back to Split. We made a quick stop at another little beach town to eat a picnic breakfast and go for a morning swim before climbing to the other side of the island. In Vela Luca, we bought more pastries and fresh fruit, got on the car ferry, and said Hvala (‘Thank you’ in Croatian) to Korčula."}</p>
          <div className="row text-center d-block">
            <a href={kor4} data-lightbox="kor-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={kor4} alt="" />
            </a>
            <a href={kor5} data-lightbox="kor-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={kor5} alt="" />
            </a>
            <a href={kor6} data-lightbox="kor-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={kor6} alt="" />
            </a>
            <a href={kor7} data-lightbox="kor-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={kor7} alt="" />
            </a>
            <a href={kor8} data-lightbox="kor-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={kor8} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post4;
