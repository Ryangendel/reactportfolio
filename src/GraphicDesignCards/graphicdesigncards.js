import React from 'react';
import { Card, Col, CardTitle } from 'react-materialize';


const graphicdesigncards = () => (
    <div>

<Card className='small'
  header={<CardTitle image='https://static.spin.com/files/2018/03/GettyImages-487344864-1520714833-640x449.jpg'>Card Title</CardTitle>}
  actions={[<a href='#'>This is a Link</a>]}>
  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
</Card>



</div>
)

export default graphicdesigncards