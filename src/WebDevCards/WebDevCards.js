import React from 'react';
import { Card, CardTitle } from 'react-materialize';
import MediaQuery from 'react-responsive';
import "./WebDevCards.css";
import { defaultProps } from 'recompose';

const WebDevCards = (props) => (
<div>
<Card style={{ height: '280px', width:"100%", paddingtop:"10px"}} header={<CardTitle reveal image={props.picture} waves='light'/>}
title= {props.title}
reveal={<p>{props.explaination}</p>}>
<p><a href={props.link}>Live Link</a></p>
<p><a href={props.github}>GitHub</a></p>
</Card>

</div>
)


export default WebDevCards;
