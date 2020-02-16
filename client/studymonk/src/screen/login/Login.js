import React, { Component } from "react";
import "./login.scss";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login_card shadow">
          <div>
            <img
              src={require("../../assets/images/undraw_social_share_algy.svg")}
            />
          </div>
          <div>
            <img src={require("../../assets/icons/logo.svg")} />
            <input type="text" placeholder="email" />
            <input type="password" placeholder="password" />
            <button className="submit">Login</button>
            <span style={{ marginTop: 20}}>
              Don't have account?<Link to={"/register"}> Signup</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
