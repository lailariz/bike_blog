import React, { Component } from 'react';
import pic from '../img/mz.jpg'
import picw from '../img/mz.webp'

class About extends Component {
  render () {
    return (
      <div>
        <h2 className="title-text">Inspiration</h2>
        <div className="row">
          <p>{'“In a car you’re always in a compartment. You're a passive observer and it is all moving by you behind in a frame,” wrote Robert M. Pirsig in Zen and the Art of Motorcycle Maintenance, a 1974 philosophy novel recounting a cross-country motorcycle trip Persig took with his son.'}</p>
          <p>{'But when you’re on a motorcycle, Persig argues, that barrier is gone. As you’re cycling through the landscape “you're in the scene, not just watching it anymore. The sense of presence is overwhelming.”'}</p>
          <p>The same feelings emerge when riding a bicycle. Traveling faster than on foot but slower than a car, bicycling is one of the best ways to explore the world and become immersed in a culture or landscape. You are in contact with all your surroundings: you can feel the wind across your face, the heat on your back, and the pain in your legs as the elevation changes. It’s easy to stop to explore towns, meet locals, and check out the fruit stand on the side of the road. Bicycle touring is one of the best ways to explore the world.</p>
	</div>
        <h2 className="title-text">Our Bicycle Tour</h2>
        <div className="row">
          <p>In 2014, Ze’ev did a solo bike trip from St. Louis to Virginia. In 2016, Maddie biked from Portland to San Francisco. They were hungry to do another one, but wanted it to be longer, more adventurous, and more challenging.  They wanted to immerse themselves in another part of the world and use their bicycles as the medium to explore.</p>
          <p>So, they made plans to bike across Eastern Europe in the Summer of 2018. They arrived in Europe with only their bikes and gear that could fit on the back of their bikes. They started in Dubrovnik, Croatia on July 1st and, after a week long loop through Montenegro, headed north until arriving in Berlin on August 3rd, where they met up with other friends. They went through Montenegro, Croatia, Italy, Slovenia, Austria, Czech Republic and Germany.</p>
	</div>
        <h2 className="title-text">About Us</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p>Maddie and Ze'ev are based in Oakland, California. After working in tech for several years, they left their jobs in May 2018 with plans to spend the summer adventuring, learning, and being outside as much as possible.</p>
            <p>Ze’ev is a software engineer and Maddie is transitioning her career from tech to international development. When not riding bikes or traveling, they love to cook, play soccer and frisbee, and explore California.</p>
            <p>If you would like to get in touch, please send an email to <strong>wheeliegoodfriends@gmail.com</strong></p>
          </div>
          <div className="col-sm-12 col-md-6">
            <picture>
              <source type="image/webp" srcset={picw} />
              <img className="about-pic" src={pic} alt='Us' />
            </picture>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
