import React, { Component } from 'react';
import coast1 from '../img/monte-1/coast701.jpg';
import coast2 from '../img/monte-1/coast720.jpg';
import coast3 from '../img/monte-1/coast721.jpg';
import coast4 from '../img/monte-1/coast732.jpg';
import coast5 from '../img/monte-1/coast698.jpg';
import skadar1 from '../img/monte-1/skadar737.jpg';
import skadar2 from '../img/monte-1/skadar762.jpg';
import skadar3 from '../img/monte-1/skadar750.jpg';
import skadar4 from '../img/monte-1/skadar748.jpg';
import skadar5 from '../img/monte-1/skadar738.jpg';
import centinje1 from '../img/monte-1/centinje763.jpg';
import centinje2 from '../img/monte-1/centinje766.jpg';
import centinje3 from '../img/monte-1/centinje788.jpg';
import kotor1 from '../img/monte-1/kotor10.jpg';
import kotor2 from '../img/monte-1/kotor94.jpg';
import kotor3 from '../img/monte-1/kotor97.jpg';

class Post3 extends Component {
  render() {
    return (
      <div>
        <h1 className="title-text">Cycling through Montenegro </h1>
        <div className="post-content pb-2">
          <p>Most of our ride in Montenegro was through the mountains and national parks. Lots of big climbs on winding roads through small towns. It was spectacular. I’d recommend it to anyone who’s up for an adventure. </p>
          <div className="text-center">
            <a href={skadar1} data-lightbox="monte-1" data-title="">
              <img className="img-fluid pb-3" src={skadar1} alt="" />
            </a>
          </div>
    	    <p>{"We started by staying two nights in Budva's old town (thanks Milja!) before continuing Southeast over a mountain range and along Skadar Lake to a large field to Rijeka Crnojevica."}</p>
          <div className="row text-center d-block">
            <a href={coast1} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={coast1} alt="" />
            </a>
            <a href={coast2} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={coast2} alt="" />
            </a>
            <a hidden href={coast3} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={coast3} alt="" />
            </a>
            <a href={coast4} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={coast4} alt="" />
            </a>
            <a href={coast5} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={coast5} alt="" />
            </a>
          </div>
					<p>{"The next day we biked 1,500 feet out of the lake valley along a quiet meandering road. We passed bee farms, wineries, and stands selling mead and olive oil. Along the way a older Montenegrin man named Andy yelled from his shack inviting us to try some of his homemade schnapps. He had dozens of flavors and we sampled fig, walnut, pear, anice, and more. He gave us apples, cheese, and tea. He showed us pictures of him in front of Niagra Falls from when he lived in Canada, him hugging Putin, and his wife and kids. He was so friendly and it was quite memorable. I love biking because you get to meet people like this and peer into their lives. "}</p>
          <div className="row text-center d-block">
            <a href={skadar2} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={skadar2} alt="" />
            </a>
            <a href={skadar3} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={skadar3} alt="" />
            </a>
          </div>
          <div className="row text-center d-block">
            <a href={skadar4} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={skadar4} alt="" />
            </a>
            <a href={skadar5} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-6 pb-3" src={skadar5} alt="" />
            </a>
          </div>
          <div className="row text-center d-block">
            <a href={centinje2} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={centinje2} alt="" />
            </a>
            <a href={centinje1} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={centinje1} alt="" />
            </a>
            <a href={centinje3} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={centinje3} alt="" />
            </a>
          </div>
					<p>{"We stopped for a quick lunch stop in the city of Centinje which I enjoyed because of its parks, walking streets, and deliciously cheap food. The ride then continued, up another 1,500 ft around Lovcen National Park on the newly repaved P1. The climb ended in a big tunnel (which, according to some cyclists we chatted with a couple days later, just opened the day we got there) and down the most beautiful windy road into a large valley with scattered towns selling handmade wool sweaters. The day ended by going down 3,500ft and 25 switchbacks into the city of Kotor. We camped outside the city, swam in the bay, and ate pastries. "}</p>
          <div className="row text-center d-block">
            <a href={kotor2} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={kotor2} alt="" />
            </a>
            <a href={kotor1} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={kotor1} alt="" />
            </a>
            <a href={kotor3} data-lightbox="monte-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={kotor3} alt="" />
            </a>
          </div>
					<p>{"These were some of the most epic bike rides I’ve ever done. Roads were perfect, scenery was unique and the towns were pleasant. Food was really cheap and the pastries were delicious. Camping was easy to find and we felt safe the whole time. "}</p>
					<p>{"Montenegro was awesome. Now we’re off for a night in Bosnia and Herzegovina before heading back to Croatia for some island hopping."}</p>
					<p>{""}</p>
        </div>
      </div>
    );
  }
}

export default Post3;
