import React from "react";
import { useMediaQuery } from 'react-responsive'

//Components
import Slides from './slides'

//Video
// import Lounge from "../../videos/lounge.mp4";

//Style
import "../../style/swiper.scss";

function Desktop() {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 1550 })
        return isDesktop ? children : null
      }
        return (
          <Desktop>
            <div className="background"
                 style={{
                   height: "115%",
                 }}>
              {/* <video autoPlay loop muted
                style={{
                  position: "absolute",
                  width: "100%",  
                  left: "50%",
                  top: "48%",
                  height: "96%",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%)",
                  zIndex: "-1"
                }}>
                <source src={Lounge} type="video/mp4"/>
              </video> */}
              <Slides />
            </div>
          </Desktop>
    )
}

export default Desktop;