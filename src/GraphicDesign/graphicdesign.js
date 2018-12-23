import React from 'react';
import { Row, Col } from 'react-materialize';
import GraphicDesignCards from '../GraphicDesignCards/graphicdesigncards.js';


const Webdesign = () => (
<div>

<Row>
  <Col s={2} className='grid-example'></Col>
  <Col s={4} className='grid-example' style={{background:"white", height:"250px" }}></Col>
  <Col s={4} className='grid-example' style={{background:"white", height:"250px" }}></Col>
  <Col s={2} className='grid-example'></Col>
</Row>

<Row>
  <Col s={3} className='grid-example'><GraphicDesignCards /></Col>
  <Col s={3} className='grid-example'><GraphicDesignCards /></Col>
  <Col s={3} className='grid-example'><GraphicDesignCards /></Col>
  <Col s={3} className='grid-example'><GraphicDesignCards /></Col>
</Row>

<Row>
  <Col s={3} className='grid-example'><GraphicDesignCards /></Col>
  <Col s={3} className='grid-example'><GraphicDesignCards /></Col>
  <Col s={3} className='grid-example'><GraphicDesignCards /></Col>
  <Col s={3} className='grid-example'><GraphicDesignCards /></Col>
</Row>
</div>
)


export default Webdesign;