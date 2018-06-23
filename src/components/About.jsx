import React, { Component } from 'react';
import pic from '../mz.jpg'

class About extends Component {
  render () {
    return (
      <div className="p-3" >
        <h2 className="title-text">About Us</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p>Native Oregonian John Stember has spent the last four years crisscrossing the US, settling briefly in Montana and Wyoming, Minnesota and Alaska. Proudly an outdoor educator since 2012, he’s been leading youth into the most remote corners of North America by foot and paddle.</p>
            <p>While attending college, John studied Wildlife Management in Tanzania and Kenya—a childhood dream ringed with ecology, anthropology, and field research on the impacts of modernization on the Maasai. John returned to Eastern Africa in 2016 to kick start a national geographic grant for the Kasiisi Project in Uganda, an NGO focused on the preservation of Kibale National Park through conservation education.</p>
        
            <p>Recently, never happy without a project, John bicycled 3,000 miles from Minnesota to Alaska.</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <img className="about-pic" src={pic} alt='Us' />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
