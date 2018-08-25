import React, { Component } from 'react';
import germany1 from '../img/germany-2/germany-1.jpg';
import germany2 from '../img/germany-2/germany-2.jpg';

class Post10 extends Component {
  render() {
    return (
      <div>
        <h1 className="title-text">Wilcommen a Berlin!</h1>
        <div className="post-content pb-2">
          <p>{"On our last day of biking, Ze’ev got 4 flat tires. I also got yelled at by a German lady for using the bathroom in a restaurant. It was also very hot. Finally, all stores were closed since it was Sunday. So, we were relieved and beyond excited when we arrived at our final Warm Shower’s host house in south Berlin. His name was Max, and he was a 24 year old software engineer/student in Berlin, and a couple years ago he biked across the United States. Max and his boyfriend welcomed us in to his apartment and were super friendly and chatty. We showered and helped them cook a creamy mushroom alfredo pasta. After dinner, Max went to the fridge and said \"I also made us dessert!\". It was a delicious fruit parfait with meringues on top and we ate it all. Even after we finished eating, we continued chatting and telling stories. Max also took out a map of Berlin and showed us all the bike routes and things we should do."}</p>
          <div className="text-center">
            <a href={germany2} data-lightbox="germany-1" data-title="">
              <img className="img-fluid pb-3" src={germany2} alt="" />
            </a>
          </div>
          <p>{"After dinner, Max and his boyfriend headed out to stay at his boyfriends house for the night, which meant that we got the apartment to ourselves! They told us to make ourselves at home, eat what we want, and stay as long as we needed the next day. They were so kind. Tomorrow we meet up with my friend Timarie who I studied abroad with in Argentina in 2013. On Thursday, we meet up with Annalyse and Matt and 15 of their other friends and stay in one giant Airbnb. This will be a change of pace, but I’m excited for it. I’m ready to wash our clothes, see some friends and stay in the same place for more than one night."}</p>
          <p>{"I’m so pleased with how everything has gone on the trip. I’m grateful for the people we’ve met, the places we’ve seen, and how easy everything has been. I can’t wait for the next bike trip :)"}</p>
          <div className="text-center">
            <a href={germany1} data-lightbox="germany-1" data-title="">
              <img className="img-fluid pb-3" src={germany1} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post10;
