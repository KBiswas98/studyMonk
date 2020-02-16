import React, { Component } from "react";
import "./register.scss";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mobileNo: "+91",
      password: ""
    };
    this.handelEmailChange = this.handelEmailChange.bind(this);
    this.handelMobilenoChange = this.handelMobilenoChange.bind(this);
    this.handelPasswordChange = this.handelPasswordChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handelMobilenoChange(event) {
    this.setState({ mobileNo: event.target.value });
  }

  handelPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handelSubmit(event) {
    console.log(
      `Email is: ${this.state.email} and Mobile No is: ${this.state.mobileNo} and password is: ${this.state.password}`
    );
    event.preventDefault();
  }

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
            <form onSubmit={this.handelSubmit}>
              <input
                type="text"
                className="filds"
                onChange={this.handelEmailChange}
                value={this.state.email}
                placeholder="email"
              />
              <input
                type="text"
                className="filds"
                onChange={this.handelMobilenoChange}
                value={this.state.mobileNo}
                placeholder="number"
              />
              <input
                type="password"
                className="filds"
                onChange={this.handelPasswordChange}
                value={this.state.password}
                placeholder="password"
              />
              <input className="submit" type="submit" value={"Register"} />
            </form>
            <span style={{ marginTop: 20 }}>
              Already have account?<Link to={"/login"}> Login</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
