import React from "react";
import { useMediaQuery } from 'react-responsive'

import Slides from './slides'

import Lounge from "../../videos/lounge.mp4";

import "../../style/swiper.scss";

function Tablet() {
    const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
      }
        return (
          <Tablet>
            <div className="background">
              <video autoPlay loop muted
                style={{
                  position: "absolute",
                  width: "100%",  
                  left: "50%",
                  top: "48%",
                  height: "85%",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%)",
                  zIndex: "-1"
                }}>
                <source src={Lounge} type="video/mp4"/>
              </video>
              <Slides />
            </div>
          </Tablet>
    )
}

export default Tablet;