import React from "react";
import { useMediaQuery } from 'react-responsive'

import Slides from './slides'

import Lounge from "../../videos/lounge.mp4";

import "../../style/swiper.scss";

function Laptop() {
    const Laptop = ({ children }) => {
        const isLaptop = useMediaQuery({ minWidth: 992, maxWidth: 1549 })
        return isLaptop ? children : null
      }
        return (
          <Laptop>
            <div className="background">
              <video autoPlay loop muted
                style={{
                  position: "absolute",
                  width: "100%",  
                  left: "50%",
                  top: "48%",
                  height: "130%",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%)",
                  zIndex: "-1"
                }}>
                <source src={Lounge} type="video/mp4"/>
              </video>
              <Slides />
            </div>
          </Laptop>
    )
}

export default Laptop;