import React, { Component } from "react";
import "./register.scss";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div className="register">
        <div className="register_card shadow">
          <div>
            <img
              src={require("../../assets/images/undraw_taking_selfie_lbo7.svg")}
            />
          </div>
          <div>
            <img src={require("../../assets/icons/logo.svg")} />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="number" />
            <input type="password" placeholder="password" />
            <button className="submit">register</button>
            <span style={{ marginTop: 20}}>
              Already have account?<Link to={"/login"}> Login</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
