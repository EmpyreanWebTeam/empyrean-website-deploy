import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Charts";

const Main = () => {
  return (
    <mainD>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello GamerPwned32409</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Kills</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Hours of Playtime</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Videos</p>
              <span className="font-bold text-title">34</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">I Like Thumbs</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}

          <div className="charts_iframe">
            <iframe 
                    src="https://empyreanwebteam.github.io/empyrean-3d-iframe.github.io/avatar.html"
                    title="My Avitar"
                    width="450" 
                    height="450"
                    frameborder="0" 
                    scrolling="no" 
                    allowfullscreen="allowfullscreen">

            </iframe>
          </div>
          <div className="charts_iframe">
            <iframe 
                    src="https://cdpn.io/jon1969edwards/debug/MWpxOdZ/PBkNWRwgyyKM"
                    title="My Avitar"
                    width="450" 
                    height="450"
                    frameborder="0" 
                    scrolling="no" 
                    allowfullscreen="allowfullscreen">

            </iframe>
          </div>
          
          <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Kill Stats</h1>
                <p>California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>
          
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Coins</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Friends Online</h1>
                <p>3</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Points</h1>
                <p>18,819,847</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </mainD>
  );
};

export default Main;
