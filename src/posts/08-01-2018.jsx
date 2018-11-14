import React, { Component } from 'react';
import germany1 from '../img/germany-2/germany-1.jpg';
import germany2 from '../img/germany-2/germany-2.jpg';

class Post10 extends Component {
  render() {
    return (
      <div>
        <h1 className="title-text">Wilcommen a Berlin!</h1>
        <div className="post-content pb-2">
          <p>{"On our last full day of biking, we woke up eager and energized. We were proud of ourselves for reaching our final destination, we were excited to meet up with our friends from the US, and we were pumped to have some rest days. Unfortunately, our moods quickly flipped when mishaps started to occur left and right: Ze’ev got 4 flat tires; a scary German lady yelled at me for using the restaurant bathroom; we couldn't find food since grocery stores were closed on Sunday; and it was over 90 degrees. So, it was not an exaggeration to say that we were ecstatic and relieved when we arrived at our final Warm Shower’s host house in South Berlin. Our host, Max, was a 24 year old software engineer student. He spoke perfect English, was chatty and generous and immediately made us feel at home. While cooking a mushroom Alfredo pasta (using his Mom's homemade receipe), he launched into stories about his bike tour across America several years ago, describing the kind people he met and the landmarks he saw. He asked us questions about ours and in turn, we shared our favorite memories and described our best campsites. It was no question that we totally hit it off."}</p>
          <p>{"After completing dinner and washing dishes, Max opened the fridge, turned to us with a slight blush in his cheeks, and said \"I also made us dessert!\". He surprised us with a delicious fruit parfait topped with meringues cookies. We laughed, expressed our extreme gratitude, and as expected, ate it all."}</p>
          <div className="text-center">
            <a href={germany2} data-lightbox="germany-1" data-title="">
              <img className="img-fluid pb-3" src={germany2} alt="" />
            </a>
          </div>
          <p>{"After dinner, Max headed out to stay at his boyfriends house for the night, meaning we had the apartment to ourselves! He told us to make ourselves at home, eat what we want, and stay as long as we needed the next day. We loved Max. "}</p>
          <p>{"Tomorrow we meet up with an old friend, Timarie, who is flying to Berlin specifically to meet up with us. I met Timarie in 2013 on my study abroad program in Argentina, and we've stayed close friends since. Later this week, we will join forces with Annalyse, Matt and 15 of their other friends in one giant Airbnb loft. This new portion of our Europe trip will be a change of pace, but I’m excited for it. I’m ready to wash our clothes, see some friends and stay in the same place for more than one night."}</p>
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
