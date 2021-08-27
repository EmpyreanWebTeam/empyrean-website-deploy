import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";

// import Sit from '../../SitDraco';
// Components
import Glitch from "../glitch";

//Style
import "../../style/swiper.scss";
import "../../style/glitch.scss";

//Images

// Data
import slides from "../../data/slides.json";

console.clear();

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  // const animationLogo = document.querySelector('.animation-logo h1');
  // animationLogo.classList.add('active');
  // setInterval(() => {
  //   animationLogo.classList.remove('active');
  //   setTimeout(() => {
  //     animationLogo.classList.add('active');
  //   }, 100);
  // }, 3000);

  return (
    <div
      key={slide.id}
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >    
          <Link to={slide.link} style={{ textDecoration: 'none' }}>
            <div
              className="slideContent"
              style={{
                backgroundImage: `url('${slide.iframe}')`
              }}
            >
            <Glitch />
            {/* <div class="glitch-demo">
              <div class="glitch">
                <div class="glitch__img"></div>
                <div class="glitch__img"></div>
                <div class="glitch__img"></div>
                <div class="glitch__img"></div>
                <div class="glitch__img"></div> */}
            <div className="font-face-gm">
            <div className="slideContentIframe">
            <div className="slideContentInner">
            <h2 className="slideTitle">{slide.welcome}</h2>
            <div className="slideIconFlex">
                <div className="slideIcon">
                  <FontAwesomeIcon
                    className="slideIcon"
                    icon={require("@fortawesome/free-brands-svg-icons")[slide.icon0]}
                  />
                  <FontAwesomeIcon
                    className="slideIcon"
                    icon={require("@fortawesome/free-brands-svg-icons")[slide.icon1]}
                  />
                  <FontAwesomeIcon
                    className="slideIcon"
                    icon={require("@fortawesome/free-brands-svg-icons")[slide.icon2]}
                  />
                </div>
              </div>
              <div className="cardInfo">
                <div className="text-center">
                  {/* <div className="error mx-auto" data-text="Welcome Back">Welcome Back</div> */}
                  
                  <h2 className="slideName">{slide.name}</h2>
                
                  <h3 className="slideCard">{slide.card}</h3>
                  <p className="slideCardOnFile">{slide.cardOnFile}</p>
                  <h3 className="slideUserName">{slide.userName}</h3>
                  <p className="slideNewCard">{slide.newCardDetails}</p>
                  <p className="slideLastLogin">{slide.lastLogin}</p>
                  
                  
                  <p className="slideFunds">{slide.funds}</p>
                  <p className="slideLastDeposit">{slide.lastDeposit}</p>
                  <p className="slideEarnings">{slide.earnings}</p>
                  <p className="slideLastWin">{slide.lastWin}</p>
                  <p className="slideMostWins">{slide.mostWins}</p>
                  <p className="slideWinnings">{slide.winnings}</p>
                  <p className="slideTips">{slide.tips}</p>
                </div>
              </div>

              <iframe
                className="slideIframe0"
                // src="https://empyreanwebteam.github.io/empyrean-3d-iframe.github.io/avatar.html"
                src={slide.iframe}
                backgroundColor="red"
                title="My Avitar"
                width="30vw" 
                height="15vw"
                frameBorder="0" 
                scrolling="no" 
                allowFullScreen="false"
                allowtransparency="true">
              </iframe>
              <iframe
                className="slideIframe1"
                src={slide.iframe}
                backgroundColor="red"
                title="My Avitar"
                width="30vw" 
                height="15vw"
                frameBorder="0" 
                scrolling="no" 
                allowFullScreen="false"
                allowtransparency="true">
              </iframe>
              <iframe
                className="slideIframe2"
                src={slide.iframe}
                backgroundColor="red"
                title="My Avitar"
                // width="30vw" 
                // height="15vw"
                frameBorder="0" 
                scrolling="no" 
                allowFullScreen="false"
                allowtransparency="true">
              </iframe>
            </div>
          
          {/* <iframe className="slideIframe"
                  src="https://empyreanwebteam.github.io/empyrean-3d-iframe.github.io/avatar.html"
                  // src={slide.iframe}
                  backgroundColor="red"
                  title="My Avitar"
                  width="30vw" 
                  height="15vw"
                  frameBorder="0" 
                  scrolling="no" 
                  allowFullScreen="allowFullScreen"
                  allowtransparency="true">
          </iframe> */}
          {/* <model3d className="slideIframe"
                     title="My Avitar"
                     src={slide.model3d}
                     width="30vw" 
                     height="15vw"
                     frameBorder="0" 
                     scrolling="no" 
                     allowFullScreen="allowFullScreen"
                     allowtransparency="true">
              <Canvas fallback={<Loader />}>
                <directionalLight intensity={0.5} />
                <ambientLight intensity={.2} />
                <Sit />
              </Canvas>
            </model3d> */}
            {/* </div> */}
                </div>
              </div>
            </div>
          </Link>
        
    </div>
  );
}


function Slides() {
  
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
      
        <div className="slides">
          <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

            {[...slides, ...slides, ...slides].map((slide, i) => {
              let offset = slides.length + (state.slideIndex - i);
              return <Slide slide={slide} offset={offset} key={slide.id} />;
            })}
          <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
  )
}

  export default Slides;