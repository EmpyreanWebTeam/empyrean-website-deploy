import {React} from "react";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Style
import './App.scss';

// Pages
import Home from './pages/home';
import Model from './pages/model';
import Dashboard from "./pages/dashboard";
import SwiperJS from "./pages/home";


function App() {
  const imageDetails = {
    width: 1843,
    height: 931,
  };

  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/swiper/:id'
                render={() => <SwiperJS imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/model/:id'
                render={() => <Model imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/dashboard'
                component={Dashboard}
                render={() => <Dashboard imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
