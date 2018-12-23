import React, {Component} from 'react';
import Parallax from 'react-simple-parallax';

class ParallaxComp extends Component {
 render () {
   return (
       <section>
           
             <Parallax className="parallax" speedDivider="5">
                 <div>Hello World!</div>
             </Parallax>
       </section>
   );
 }
}

export default ParallaxComp;