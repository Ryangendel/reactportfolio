import React from "react";
import { Parallax, Background } from "react-parallax";
import { Footer } from "react-materialize";
import WebDesign from "../WebDev/webdev.js";
import GraphicDesign from "../GraphicDesign/graphicdesign.js"
import SimpleMap from '../GoogleMaps/GoogleMaps.js'
import OtherSkills from '../OtherSkills/OtherSkills.js'
import TechLogos from '../TechLogos/TechLogos.js'

const MegaBox = () => (
  <div>
    
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage="https://www.siliconluxembourg.lu/wp-content/uploads/2015/12/code-1076533_1920.jpg"
      bgImageAlt="the dog"
      strength={200}
    >
    
      Blur transition from min to max
      <div style={{ height: "600px" }} />
      <TechLogos />
    </Parallax>
    {/* -----custom background element-----*/}
    <Parallax strength={300}>
      <div>Use the background component for custom elements</div>
      <Background className="custom-bg">
        <img src="https://cdn.lynda.com/course/618730/618730-636426376439835436-16x9.jpg" alt="fill murray" />
        <div style={{ height: "500px" }} />
      </Background>
      <h1>Web Dev</h1>
      <WebDesign />
    </Parallax>
    
    {/* GRAPHICDESIGN */}
    
    <Parallax
      bgImage={"images-1.jpeg"}
      strength={400}
      renderLayer={percentage => (
        <div
          style={{
            position: "absolute",
            background: `rgba(255, 125, 0, ${percentage * 1})`,
            left: "50%",
            top: "50%",
            width: percentage * 500,
            height: percentage * 500
          }}
        />
      )}
    >
      <h1>Graphic Design</h1>
      <GraphicDesign />
    </Parallax>

    {/* OTHER */}

    <Parallax
      blur={10}
      bgImage="https://www.siliconluxembourg.lu/wp-content/uploads/2015/12/code-1076533_1920.jpg"
      bgImageAlt="the cat"
      strength={0}
    >
      <h1>Other Achievements</h1>
      {/* <div style={{ height: "600px" }}/> */}
      <OtherSkills />
    </Parallax>
    
    {/* MAP */}
    <div>
          <h1>MAP WITH CONTACT INFO</h1>
          <SimpleMap />
    </div>
    
    {/* FOOTER */}

    <Footer
      copyrights="&copy 2015 Copyright Text"
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="#!">
          More Links
        </a>
      }
      links={
        <ul>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Link 1
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Link 2
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Link 3
            </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Link 4
            </a>
          </li>
        </ul>
      }
      className="example"
    >
      <h5 className="white-text">Footer Content</h5>
      <p className="grey-text text-lighten-4">
        You can use rows and columns here to organize your footer content.
      </p>
    </Footer>
    ;<p>... Content</p>
  </div>
);
export default MegaBox;
