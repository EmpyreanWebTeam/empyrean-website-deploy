import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Style
import './App.css';

// Pages
import DefaultLayout from './layouts/DefaultLayout';
import Splash from './splash/Splash';
import Dashboard from './dashboard/dashboard';

function App() {
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
