import React, { Component } from 'react';
import arrival from '../img/arrival.jpg';

class Post extends Component {
  render() {
    return (
      <div>
        <h1>Our first night in Croatia </h1>
        <div className="post-content pb-2">
          <img className="img-fluid pb-3" src={arrival} />
          <p>{"Upon arrival at the Dubrovnik airport, we began the 2-hour long unpacking and assembling process in the airport arrival lobby. Whew. Once we were all set, we just hoped on our bikes and biked away from the airport. This felt awesome and also slightly odd."}</p>
    	    <p>{"With no traffic and a beautiful side road, we began our 20km ride to our home for the night. We were staying with a warmshowers.org host, Marko, at his “Nature Park” in Mikulici, Croatia. The road hugged the coastline on our right side, and large granite? mountains shot up on our left side. Surrounding us were tall cypres tress and small shrubs, which, unfortunately, provided very little shade on our fair skin. It was a new type of scenery and we enjoyed it."}</p>
    	    <p>{"We passed a well-loved house that had “bikers welcome” signs and quotes about kindness written on the house. We had a feeling this was Marko’s house. We then followed hand written instructions on a sign in the driveway to ring a red bell 5 times. Shortly, a large man with white hair and a big belly in only whitie tighties opened the door and walked out. He said hello to Ze’ev and then as soon as he saw me he said “let me put on some pants” and turned around to walk back inside without saying anything else. Ze’ev and I laughed quietly."}</p>
    	    <p>{"Marko returned (with pants on, no shirt) to introduce himself and his dog Jackie, and told us where we could put up our tent. He was kind, jolly, and spoke English well but with a thick accent. He instructed us to leave our bikes behind the house and to follow the path up the hill 70 meters until we reach the opening. He told us that a young couple had lived up there for two years and built several shacks to live in. Recently they moved out to have a baby. We were welcome to sleep inside the shacks as long as we wrote them a thank you note. We could also pitch a tent, which was ultimately what we decided to do."}</p>
			    <p>{"Marko invited us to drive into town to watch the 8pm Croatia vs Denmark World Cup soccer game. Obviously, we said yes. It was the round of 16 and we were in Croatia. So the four of us (Marko, Jackie (the dog), Ze’ev, and I) climbed in his little red car and drove over the hill to town. Marko stopped the car when we passed one of his friends and they talked in Croatian for several minutes. I had no idea what they were saying. In fact, their tones made it sound like they were mad at each other, especially when the friend stomped off into his house. Fortunately they weren’t mad at each other and really he was just going to get us a bowl of fresh cherries, grapes, a peach, and half a flask of whiskey. Marko explained to me and Ze’ev that in Croatia everyone gives each other gifts when they see each other. They also give each other bottles of liquor to wash down the food that they share. At least that was how we interpreted the gesture, Marko said it was to chase the fruit. The fruit was tasty, the whisky was strong, and I was amused with this Croatian custom."}</p>
			    <p>{"We sat at an outdoor bar to watch the Croatia game. Everyone was smoking cigarettes and drinking beer. Marko told us about the time he started a painting company in Canada, how stupid he thinks Trump is, and asked us about California. Meanwhile, the sunset on the mountains in front of us was spectacular. The game was slow and they were tied 1-1 at the end of 90 minutes, meaning it would go to overtime. Unfortunately, Marko was tired so he told us we’d be leaving before stoppage time started. Bummed but grateful for the experience, we left before we knew that Croatia would eventually win in PKs."}</p>
			    <p>{"Back in the Nature Park, Ze’ev and I snuggled in the tent and heard chants and cheers celebrating the Croatian win. We slept soundly amongst the very loud hum of the golf ball sized crickets."}</p>
			    <p>{"The next morning we packed up our things and said good morning to Jackie and Marko. Marko and his friend were smoking cigarettes and drinking coffee. We chatted: Marko told us about his business plan for a railroad company in southern Croatia. He’s going to email it to Ze’ev incase we want to invest in it. Marko gave us tips for bakeries and routes for our bike adventure that day. We’d be crossing the Croatia-Montenegro border on bike and continuing south 70km along the coast to the party town of Budva, Montenegro."}</p>
			    <p>{"Upon departure, we took a picture together, said thanks and headed out."}</p>
			    <p>{"About 1 mile down the road, Marko and his friend pulled up next to us in his car. He handed us a plastic bag and said “some fruit from you, and a peach for the lady”"}</p>
        </div>
      </div>
    );
  }
}

export default Post;
