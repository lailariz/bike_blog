import React, { Component } from 'react';
import pic from '../img/mz.jpg'
import picw from '../img/mz.webp'

class About extends Component {
  render () {
    return (
      <div>
        <h2 className="title-text">About Us</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p>Maddie and Ze'ev are biking across Europe. They started in Dubrovnik and, after a quick stop in Montenegro, will end up in Berlin at the beginning of August.</p>
            <p>If you would like to get in touch with us for any reason, please send an email to <strong>wheeliegoodfriends@gmail.com</strong></p>
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
