
import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/navigation/navigation.min.css"

// Styles
import "../style/swiper.scss";
import "../App.scss";

// Images
import img1 from "../images/gameStats/gameDashboard1.png";
import img2 from "../images/gameStats/gameDashboard2.png";
import img3 from "../images/gameStats/gameDashboard3.png";
import img4 from "../images/gameStats/gameDashboard4.png";
import img5 from "../images/gameStats/gameDashboard5.png";
import img6 from "../images/gameStats/gameDashboard6.jpeg";


// Pages
import Home from '../pages/home';
import Model from '../pages/model';
import Dashboard from "../pages/dashboard";

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Navigation,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Navigation,Pagination]);


function SwiperJS() {
     const imageDetails = {
       width: 524,
       height: 650,
     };
  
  return (
    <Router>
      <Route
        render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Swiper effect={'coverflow'}
                            media={{
                                '@media (max-width: 900px)': {
                                  width: '600px',
                                  height: '300px'
                                },
                                '@media (min-width: 900px)': {
                                  width: '960px',
                                  height: '600px'
                                }
                              }} 
                            navigation={true}
                            grabCursor={true} 
                            centeredSlides={true} 
                            slidesPerView={'auto'} 
                            coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": true
                        }} pagination={true} className="mySwiper">
                    <SwiperSlide>
                            <Route
                                exact
                                path='/'
                                render={() => <Home imageDetails={imageDetails} />}
                            />
                            <Route
                                exact
                                path='/dashboard/:id' 
                                children={({match}) => (
                                    <li className={match ? 'active' : ''}>
                                        <Link to="/dashboard">
                                            <img src={img1} alt="image_1"/>
                                        </Link>
                                    </li>
                                )}
                                render={() => <Dashboard imageDetails={imageDetails} />}
                                />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Route
                                exact
                                path='/swiperPage_2' children={({match}) => (
                                    <li className={match ? 'active' : ''}>
                                        <Link to="/swiperPage_2">
                                            <img src={img2} alt="image_2"/>
                                        </Link>
                                    </li>
                                )}
                                render={() => <Home imageDetails={imageDetails} />}
                                />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Route
                                exact
                                path='/swiperPage_3' children={({match}) => (
                                    <li className={match ? 'active' : ''}>
                                        <Link to="/swiperPage_3">
                                            <img src={img3} alt="image_3"/>
                                        </Link>
                                    </li>
                                )}
                                render={() => <Home imageDetails={imageDetails} />}
                                />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Route
                                exact
                                path='/swiperPage_4' children={({match}) => (
                                    <li className={match ? 'active' : ''}>
                                        <Link to="/swiperPage_4">
                                            <img src={img4} alt="image_4"/>
                                        </Link>
                                    </li>
                                )}
                                render={() => <Home imageDetails={imageDetails} />}
                                />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Route
                                exact
                                path='/swiperPage_5' children={({match}) => (
                                    <li className={match ? 'active' : ''}>
                                        <Link to="/swiperPage_5">
                                            <img src={img5} alt="image_5"/>
                                        </Link>
                                    </li>
                                )}
                                render={() => <Home imageDetails={imageDetails} />}
                                />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Route
                                exact
                                path='/swiperPage_6' children={({match}) => (
                                    <li className={match ? 'active' : ''}>
                                        <Link to="/swiperPage_6">
                                            <img src={img6} alt="image_6"/>
                                        </Link>
                                    </li>
                                )}
                                render={() => <Home imageDetails={imageDetails} />}
                                />
                        </SwiperSlide>
                    
                    </Swiper>
                </Switch>
            </AnimatePresence>
        )}
      />
    </Router>
  )
}

export default SwiperJS;