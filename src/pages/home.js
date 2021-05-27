import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

// Images
import gLeft from '../images/ecGateLeft.png';
import gRight from '../images/ecGateRight.png';
// import inside from '../images/swiperScreen.png';
import gDash from '../images/gameDashboard1.png';

// Style
import "../style/doors.css";
import "../App.scss";
 
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>

              <div className="wrapper">
                <div className="gLeftandRight">
                  <div id="left-door" className="lDoor">
                    <img src={gLeft} className="gLeft" alt="leftDoor">
                    </img>
                  </div>
                  <div className='frame'>
                    <Link to={`/model/empyrean`}>
                      <ProgressiveImage
                        className="insideTransition"
                        src={require("../images/gameDashboard1.png")}
                        placeholder={require("../images/gameDashboard1.png")}>
                        {(src) => (
                          <motion.img
                            src={gDash}
                            alt='Empyrean'
                            whileHover={{ scale: 1.1 }}
                            transition={transition}
                          />
                        )}
                      </ProgressiveImage>
                    </Link>
                  </div>
                      {/* <img src={inside} alt="inside" className="inside"></img> */}
                  <div id="right-door" className="rDoor">
                    <img src={gRight} className="gRight" alt="rightDoor">
                    </img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
      </>
    );
 
export default Home;