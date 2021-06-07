import React from "react";
import { Link } from "react-router-dom";



// Images
import gLeft from '../images/ecGateLeft.png';
import gRight from '../images/ecGateRight.png';

// Style
import "../style/doors.css";
import "../style/swiper.scss";

import Lounge from "../videos/lounge.mp4";

console.clear();

const slides = [
  {
    title: "My Dashboard",
    subtitle: "subtitle",
    description: "description",
    link: "/dashboard",
    image:
      "https://jonedwards.tech/img/empyrean/gameStats/gameDashboard1.png"
  },
  {
    title: "My Stats",
    subtitle: "subtitle",
    description: "description",
    link: "/dashboard",
    image:
      "https://jonedwards.tech/img/empyrean/gameStats/gameDashboard2.png"
  },
  {
    title: "Title",
    subtitle: "subtitle",
    description: "description",
    link: "/dashboard",
    image:
      "https://jonedwards.tech/img/empyrean/gameStats/gameDashboard3.png"
  },
  {
    title: "My Money",
    subtitle: "subtitle",
    description: "description",
    link: "/dashboard",
    image:
      "https://jonedwards.tech/img/empyrean/gameStats/gameDashboard4.png"
  },
  {
    title: "My Games",
    subtitle: "subtitle",
    description: "description",
    link: "/dashboard",
    image:
      "https://jonedwards.tech/img/empyrean/gameStats/gameDashboard5.png"
  }
];

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

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      {/* <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      /> */}
      <Link to={slide.link} style={{ textDecoration: 'none' }}>
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >

          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function Home({ imageDetails, image }) {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
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
                  <div className="background">
                    <video autoPlay loop muted
                      style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "49%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%, -50%)",
                        zIndex: "-1"
                      }}>
                      <source src={Lounge} type="video/mp4"/>
                    </video>
                    <div className="slides">
                      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

                      {[...slides, ...slides, ...slides].map((slide, i) => {
                        let offset = slides.length + (state.slideIndex - i);
                        return <Slide slide={slide} offset={offset} key={i} />;
                      })}
                      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
                    </div>
                  </div>
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

  );
}

export default Home;
