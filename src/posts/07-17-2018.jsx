import React, { Component } from 'react';
import mali1 from '../img/mali-1/mali-1.jpg';
import mali2 from '../img/mali-1/mali-2.jpg';
import mali3 from '../img/mali-1/mali-3.jpg';
import mali4 from '../img/mali-1/mali-4.jpg';

class Post6 extends Component {
  render() {
    return (
      <div>
        <h1 className="title-text">Laurence and Vladimir</h1>
        <div className="post-content pb-2">
          <p>When my mom was 19, she did a house exchange with another young woman from Geneva, Switzerland, named Laurence. For 6 months, Laurence lived in San Carlos with my Grandparents, and my mom lived in Geneva with Laurence’s family. Laurence became quite close with my family and vise versa, so much that they were invited to each others weddings and have come to visit each other around the world.  Now, Laurence and her husband, Vladimir, live in Geneva during the winter, and on their remote house on the island of Mali Losinj  during the summer.</p>
          <div className="text-center">
            <a href={mali1} data-lightbox="mali-1" data-title="">
              <img className="img-fluid pb-3" src={mali1} alt="" />
            </a>
          </div>
    	    <p>Ze’ev and I came to meet Laurence and Vladimir and stayed at their Croatian summer house for 2 days. We ate delicious meals and had history lessons from Vladimir on Yugoslavia, and we swam in the bay and went sailing around the islands. Their two houses, built in 1906, use rainwater and are powered completely by solar panels. There are only 5 houses in this bay and can only be accessed by a rough gravel road. Their secluded bay is gorgeous and their summers are simple and relaxing.</p>
					<p>We watched the World Cup finals in the only bar in town about 4 miles from their house. The bar was full with local families with red and white checkered jerseys and painted faces.</p>
          <div className="row text-center d-block">
            <a href={mali2} data-lightbox="mali-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={mali2} alt="" />
            </a>
            <a href={mali3} data-lightbox="mali-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={mali3} alt="" />
            </a>
            <a href={mali4} data-lightbox="mali-1" data-title="">
              <img className="img-fluid col-4 pb-3" src={mali4} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post6;
