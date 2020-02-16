import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "../dashbord/feed/Feed";
import Dashbord from "../dashbord/Dashbord";
import Campain from "../dashbord/campain/Campain";

export default class DashbordRouter extends Component {
  render() {
    return (
      <Router>
        <div style={{ margin: -10, display: "flex", flexDirection: "row" }}>
          <Dashbord />
          <div style={{ zIndex: 300, marginLeft: 20, backgroundColor: '#F4F7FD'}}>
            <Switch>
              <Route path="/dashbord/campain" component={Campain} />
              <Route path="/dashbord/feed" component={Feed} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
