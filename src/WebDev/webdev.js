import React from 'react';
import { Row, Col } from 'react-materialize';
import WebDevCards from '../WebDevCards';


const WebDesign = () => (
<div>
<Row>
  <Col s={2} className='grid-example'></Col>
  <Col s={4} className='grid-example' style={{background:"white", height:"250px" }}></Col>
  <Col s={4} className='grid-example' style={{background:"white", height:"250px" }}></Col>
  <Col s={2} className='grid-example'></Col>
</Row>

<Row>
  <Col s={3} className='grid-example'><WebDevCards 
        title = {"JavaScript Hangman"}  
        link ={"https://ryangendel.github.io/Homework-3/"} 
        picture= {"http://11points.com/wp-content/uploads/2012/09/dominatehangman-1600.jpg"}
        cardTitle= {"JavaScript Hangman"}
        explaination = {"This is an good example of my abilities with XXXXXXXXXXX"}
        github = {"https://github.com/Ryangendel/Homework-3"}
        />
  </Col>

  <Col s={3} className='grid-example'><WebDevCards
   title = {"HandleBars/ORM"}  
   link ={"https://ryangendel.github.io/FriendFinder/"} 
   picture= {"https://cdn.pixabay.com/photo/2013/07/12/16/53/burger-151421__340.png"}
   cardTitle= {"HandleBars/Handwritten ORM"}
   explaination = {"This is an good example of my abilities with XXXXXXXXXXX"}
   github = {"https://github.com/Ryangendel/burger"}
  />
  </Col>

  <Col s={3} className='grid-example'><WebDevCards
  title = {"Routing"}  
  link ={"https://frifinder.herokuapp.com"} 
  picture= {"https://i.kisscc0.com/20180705/haq/kisscc0-social-media-computer-icons-social-engagement-down-seir-model-5b3e16a3593306.9358073015307956833654.png"}
  cardTitle= {"Routing"}
  explaination = {"This is an good example of my abilities with XXXXXXXXXXX"}
  github = {"https://github.com/Ryangendel/FriendFinder"}
  />
  </Col>

  <Col s={3} className='grid-example'><WebDevCards
  title = {"API Integration"}  
  link ={"https://ryangendel.github.io/GIF/"} 
  picture= {"http://www.apvit.com/sites/default/files/systems-integration-gears.png"}
  cardTitle= {"API Integration"}
  explaination = {"This is an good example of my abilities with XXXXXXXXXXX"}
  github = {"https://github.com/Ryangendel/GIF"}
  />
  
  </Col>
</Row>
<WebDevCards />
</div>
)

export default WebDesign;
