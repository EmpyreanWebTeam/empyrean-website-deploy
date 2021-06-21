import React from "react";
import { useMediaQuery } from 'react-responsive'

import Slides from './slides'

// import Lounge from "../../videos/lounge.mp4";

import "../../style/swiper.scss";

function Mobile() {
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
      }
        return (
          <Mobile>
            <div className="background">
              {/* <video autoPlay loop muted
                style={{
                  position: "absolute",
                  width: "100%",  
                  left: "50%",
                  top: "48%",
                  height: "95%",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%)",
                  zIndex: "-1"
                }}>
                <source src={Lounge} type="video/mp4"/>
              </video> */}
                <Slides />
            </div>
          </Mobile>
    )
}

export default Mobile;