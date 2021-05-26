import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Style
import './App.css';

// Pages
import DefaultLayout from './layouts/DefaultLayout';
import Splash from './splash/Splash';
import Dashboard from './pages/dashboard';
import Model from "./pages/model";


function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  return (
    <Router>
      {/* <Header /> */}
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
                path='/model/:id'
                render={() => <Model imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
