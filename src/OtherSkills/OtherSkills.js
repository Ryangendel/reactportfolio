import React from 'react';
import { Row, Col } from 'react-materialize';
import OtherSkillsCards from '../OtherSkillsCards';
import OtherSkillsSmall from "../OtherSkillsSmall/OtherSkillsSmall.js";

const otherSkills = () => (
<div>

<Row>
  <Col s={2} className='grid-example'></Col>
  <Col s={4} className='grid-example' style={{background:"white", height:"250px" }}></Col>
  <Col s={4} className='grid-example' style={{background:"white", height:"250px" }}></Col>
  <Col s={2} className='grid-example'></Col>
</Row>
<Row></Row>
<Row></Row>

<Row>
<Col s={1} className='grid-example'></Col>
<Col s={4} className='grid-example'>
<OtherSkillsSmall
  title ="Statistical Analysis (B.A. of Econ)"
  image = "https://ouseful.files.wordpress.com/2011/05/pivot-table-counta.png"
  content = "Not only did my degree in economics help my approach to problems teaching me to be more methodical, I also learned some practical skills like econometrics, statistical inference, and how to triangulate data. In the past, my analysis has find product insights that lead to the release of products all over America."
  href = "#"
  />
  
  </Col>
<Col s={2} className='grid-example'></Col>

  <Col s={4} className='grid-example'>
  <OtherSkillsSmall
  title ="Cyber Security (TA for C.S. class)"
  image = "https://gcn.com/~/media/GIG/GCN/Redesign/Articles/2017/May/cybersecurity2.png"
  content = "When the University of Denver decided to launch their first cyber security bootcamp program they hired me on as a TA. Through this I learned so much more than I thought that was possible. This has proven to help in many aspects of my career because understanding computers at a deeper level and how to write emacuate code. It also allows me to anticipate and scale my code for a more secure network."
  href = "#"
  />
  <Col s={1} className='grid-example'></Col>
  </Col>
  
</Row> 
<Row></Row>
<Row></Row>

<Row>
  <Col s={4} className='grid-example'></Col>
  
  <Col s={4} className='grid-example'>

  <OtherSkillsSmall 
  title ="Videography (Reporter/Editor)"
  image = "https://i.ytimg.com/vi/YiesMpzFYf8/maxresdefault.jpg"
  content = "For a little longer than a year I worked as a reporter for the Newscast at my College. During this time I learned many aspects of videography, from editing (including light special effects) to best practices for interviews. We worked so well as a team we ended up winning to Regional Emmy awards for our work."
  href = "#"
  />
  </Col>

  {/* <Col s={6} className='grid-example'><OtherSkillsCards 
  item1="President Of the Student Economic Society"
  item2="Student Advisory Council to the Dean"
  item3="Student Fee Review Panel"
  item4="Student Advisory Committee to the Auraria Board"
  />
  </Col> */}
  <Col s={4} className='grid-example'></Col>
  

  {/* <Col s={3} className='grid-example'><OtherSki />
  </Col> */}

</Row> 
</div>
)

export default otherSkills;