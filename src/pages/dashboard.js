import React, { Component } from "react";
import { Link,
  NavLink,
  Route 
 } from "react-router-dom";
 
import gDash from '../images/gameDashboard1.png';
class Dashboard extends Component {
  render() {
    return (
      <Dashboard>
        <div>
          <img src={gDash}></img>
        </div>
      </Dashboard>
    );
  }
}

export default Dashboard;