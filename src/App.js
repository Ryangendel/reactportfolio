import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from './Header/Header'
import MegaBox from './Parallax/Parallax'
// import { Parallax, Background } from 'react-parallax';
// import Parallax from './SimpleParallex/SimpleParallex';

const About = () => (
  <div>
    This is about pabge
    </div>
)

const GraphicDesign = () =>(
  <div>

    graphic design
    </div>
)

const App = () => (
  <Router>
    
  <div>
    <NavBar /> 
    <MegaBox />
    {/* <Wrapper> */}
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={GraphicDesign} />
    {/* </Wrapper> */}
    {/* <Footer /> */}
  </div>
</Router>
)

export default App;
