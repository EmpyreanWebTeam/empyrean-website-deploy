
import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

// Styles
import "../style/swiper.scss";
import "../App.scss";

// Images
import img1 from "../images/gameStats/gameDashboard1.png";
import img2 from "../images/gameStats/gameDashboard2.png";
import img3 from "../images/gameStats/gameDashboard3.png";
import img4 from "../images/gameStats/gameDashboard4.png";
import img5 from "../images/gameStats/gameDashboard5.jpeg";


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);


function App() {
    // const imageDetails = {
    //   width: 524,
    //   height: 650,
    // };
  
  
  
  return (
    <Router>
      <Route
        render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": true
                        }} pagination={true} className="mySwiper">
                    <SwiperSlide>
                        <Route
                            exact
                            path='/swiperPage_1' children={({match}) => (
                                <li className={match ? 'active' : ''}>
                                    <Link to={"/dashboard"}>Dashboard
                                        <img src={img1} alt="image_1" />
                                    </Link>
                                </li>
                            )}
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/model">
                            <img src={img2} alt="image_2"/>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/model">
                            <img src={img3} alt="image_3"/>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/model">
                            <img src={img4} alt="image_4"/>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/model">
                            <img src={img5} alt="image_5"/>
                        </Link>
                    </SwiperSlide>
                    
                    
                    </Swiper>
                </Switch>
            </AnimatePresence>
        )}
      />
    </Router>
  )
}

export default App;