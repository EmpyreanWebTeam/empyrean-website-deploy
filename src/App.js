import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Style
import './App.scss';

// Pages
import DefaultLayout from './layouts/DefaultLayout';
import Splash from './splash/Splash';
import Dashboard from './pages/dashboard';


function App() {
  const imageDetails = {
    // width: 625,
    height: 650,
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
                render={() => <Splash imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/dashboard/:id'
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
