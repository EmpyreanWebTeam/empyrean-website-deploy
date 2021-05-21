import React, { Component } from "react";

// Images
import gLeft from '../images/ecGateLeft.png';
import gRight from '../images/ecGateRight.png';
import inside from '../images/swiperScreen.png';

// Style
import "../style/doors.css";
 
class Splash extends Component {
  render() {
    return (
      
        <div className="wrapper">
          <div className="gLeftandRight">
              <div id="left-door" className="lDoor">
                <img src={gLeft} className="gLeft" alt="leftDoor">
                </img>
              </div>
                <img src={inside} alt="inside" className="inside"></img>
              <div id="right-door" className="rDoor">
                <img src={gRight} className="gRight" alt="rightDoor">
                </img>
              </div>
          </div>
        </div>
    );
  }
}
 
export default Splash;