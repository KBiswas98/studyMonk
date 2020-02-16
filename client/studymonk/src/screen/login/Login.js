import React, { Component } from "react";
import "./login.scss";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handelEmailChanges = this.handelEmailChanges.bind(this);
    this.handelPasswordChanges = this.handelPasswordChanges.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelEmailChanges(event) {
    this.setState({ email: event.target.value });
  }

  handelPasswordChanges(event) {
    this.setState({ password: event.target.value });
  }

  handelSubmit(event) {
     
    console.log(
      `Email: ${this.state.email} and password: ${this.state.password}`
    );
    event.preventDefault();
  }

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
            <form onSubmit={this.handelSubmit}>
              <input
                className="filds"
                type="text"
                placeholder="email"
                value={this.state.email}
                onChange={this.handelEmailChanges}
              />
              <input
                className="filds"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handelPasswordChanges}
              />
              <input className="submit" type="submit" value={"Login"} />
            </form>
            <span style={{ marginTop: 20 }}>
              Don't have account?<Link to={"/register"}> Signup</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
