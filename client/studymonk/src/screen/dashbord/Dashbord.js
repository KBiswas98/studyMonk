import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dashbord.scss";

export default class Dashbord extends Component {
  render() {
    return (
      <div className="drawer">
        <div>BLAZE</div>
        <div>
          <img src={require("../../assets/images/kamalesh.jpg")} />
          <h3>{"Kamalesh Biswas"}</h3>
        </div>
        <Link to={"/dashbord/campain"}>
          <span style={{ margin: 10 }}>
            <img
              src={require("../../assets/icons/icons8_remove_ads_100px.png")}
              style={{
                width: 18,
                height: 18,
                marginRight: 10,
                position: "relative",
                top: "5px"
              }}
            />
            Campain
          </span>
        </Link>
        <Link to={"/dashbord/feed"}>
          <span style={{ margin: 10 }}>
            <img
              src={require("../../assets/icons/icons8_chart_100px.png")}
              style={{
                width: 18,
                height: 18,
                marginRight: 10,
                position: "relative",
                top: "5px"
              }}
            />
            Status
          </span>
        </Link>
        <Link to={"/dashbord/campain"}>
          <span style={{ margin: 10 }}>
            <img
              src={require("../../assets/icons/icons8_logout_rounded_up_100px.png")}
              style={{
                width: 18,
                height: 18,
                marginRight: 10,
                position: "relative",
                top: "5px"
              }}
            />
            Log out
          </span>
        </Link>
      </div>
    );
  }
}
