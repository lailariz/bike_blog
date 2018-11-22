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
          <p>When my mom was 19 years old, she did a house exchange with another young woman, Laurence, from Geneva, Switzerland. For 6 months, Laurence lived in San Carlos with my Grandparents, and my mom lived in Geneva with Laurence’s family. Laurence became quite close with my family and vise versa, so much that they were invited to their weddings and have come to visit each other around the world.  Now, Laurence and her husband, Vladimir, live in Geneva during the winter, and during the summer, on their remote house on the Croatian island of Mali Losinj.</p>
          <div className="text-center">
            <a href={mali1} data-lightbox="mali-1" data-title="">
              <img className="img-fluid pb-3" src={mali1} alt="" />
            </a>
          </div>
    	    <p>Ze’ev and I decided to plan our route so that we could bike on Mali Losinj and meet Laurence and Vladimir.  Their family owns two houses, one next to the other, that were built in 1906. They use rainwater and are powered completely by solar panels. As two of the five houses in this secluded bay, their property is only accessible by traveling down a rough dirt road, so bumpy that we couldn't ride our bikes without getting a flat tire. Their secluded bay is gorgeous and they've enjoyed simple and relaxing summers there for the last 70+ years.</p>
					<p>Although we had never met them before, we immediately felt welcome and stayed with their family for 2 days. Each morning and evening, we would sit on their back porch overlooking the Adriatic Sea to enjoy delicious meals with their family of 4 generations: Laurence, Vladimir (the grandfather), Vladimir (the son), little Vladimir (the grandson), and Vladimir's 102 year old mother. 
After breakfast, Vladimir would launch into history lessons on Yugoslavia and Tito, Yugoslavia's former dictator. One afternoon, Laurence and Vladimir took us out on their sailboat to show us the coastal towns and various islands. We also swam, read our books, played soccer on the back porch with little Vladimir, and at night, watched the stars come out.</p>
					<p>On July 15th, the day of the World Cup Finals, we headed to the only bar in town to watch the France and Croatia game. It seemed that the entire town was there. In every direction we looked there were red and white colored checkers (the Croatia flag) on faces, clothing, cars, sidewalks and walls. Anticipation had been growing for days now: the bar was rowdy and tensions were high. People were on the edge of their seats when the kickoff whistle blew. As France scored their first and second goals, the mood slowly changed and the crowd became somber. When Croatia scored their goals, the room erupted with singing and cheering as people jumped from their seats to hug the nearest person and pridefully wave the flag. While the game ended with a win for France, the Croatian fans still showed pride and happiness for their team that represented their little country.</p>
					<p>Traveling in Croatia during the World Cup will be a memory that I will cherish forever. We witnessed an energy, pride and passion that would have been difficult to see at any other time of the year. We saw Croats come together to share emotions of extreme celebration, deep sadness, and outright fear all for the sport of soccer. We witnessed and participated in activities with the locals just by showing up to the bar to watch the game or by biking through the street celebrations the next morning. The World Cup elicits a sense of community, culture and national pride that I'm not sure any other global event does. It makes me appreciate the nature of the sport and grateful that soccer is the sport that I spent so many years of my life playing. I'm already excited for the Women's World Cup in France next year.</p>
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
