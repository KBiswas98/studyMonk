import React, { Component } from "react";
import "./home.scss";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="header">
          <div className="navbar">
            <div>
              <img src={require("../../assets/icons/logo.svg")} />
            </div>
            <div>
              <ul>
                <li>Price</li>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Signup</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="slider">
            <div>
              <img
                src={require("../../assets/images/undraw_online_ad_mg4t.svg")}
              />
            </div>
            <div>
              <h2>Digital Advertising Made Easy, Fast & Effective</h2>
              <p>
                Start driving results across Facebook, Instagram, and Google
                with a free 14-day trial of AdEspresso.
              </p>
              <button className="shadow button">Start Your Free Trail Now !</button>
            </div>
          </div>
        </section>
        <section className="offer">
          <div>
            <div>
              <img
                src={require("../../assets/icons/icons8_create_100px.png")}
              />
            </div>
            <h3> CREATE </h3>
          </div>
          <div>
            <div>
              <img
                src={require("../../assets/icons/icons8_manager_100px.png")}
              />
            </div>
            <h3> MANAGE </h3>
          </div>
          <div>
            <div>
              <img
                src={require("../../assets/icons/icons8_analyze_100px.png")}
              />
            </div>
            <h3> ANALYZE </h3>
          </div>
          <div>
            <div>
              <img
                src={require("../../assets/icons/icons8_member_100px.png")}
              />
            </div>
            <h3> COLLABORATE </h3>
          </div>
          <div>
            <div>
              <img
                src={require("../../assets/icons/icons8_learning_100px.png")}
              />
            </div>
            <h3> LEARN </h3>
          </div>
        </section>
        <section className="feture">
          <div className="_shadow">
            <div>
              <h3>Create</h3>
              <p>
                AdEspresso supports Facebook, Instagram and Google Ads campaign
                creation – creating all your campaigns in one place has never
                been so easy.
              </p>
              <button className="no_fill button">Read More</button>
            </div>
            <div>
              <img
                src={require("../../assets/images/undraw_social_girl_562b.svg")}
              />
            </div>
          </div>
          <div className="_shadow">
            <div>
              <h3>Manage</h3>
              <p>
                One solution, all the advertising channels you need – less time
                spent switching from one Ads Manager to the other, more time
                making money.
              </p>
              <button className="no_fill button">Read More</button>
            </div>
            <div>
              <img
                src={require("../../assets/images/undraw_social_expert_07r8.svg")}
              />
            </div>
          </div>
          <div className="_shadow">
            <div>
              <h3>Analyze</h3>
              <p>
                Web, PDF, Email, Excel – Get the actionable insights you need,
                when you need them.
              </p>
              <button className="no_fill button">Read More</button>
            </div>
            <div>
              <img
                src={require("../../assets/images/undraw_social_growth_d0y3.svg")}
              />
            </div>
          </div>
          <div className="_shadow">
            <div>
              <h3>Collaborate</h3>
              <p>
                Get easy access to your clients’ accounts and have them approve
                your campaigns before going live. In one click.
              </p>
              <button className="no_fill button">Read More</button>
            </div>
            <div>
              <img
                src={require("../../assets/images/undraw_social_life_4np1.svg")}
              />
            </div>
          </div>
          <div className="_shadow">
            <div>
              <h3>Learn</h3>
              <p>
                Take your marketing skills to the next level with the most
                trustworthy resources at your fingertips.
              </p>
              <button className="no_fill button">Read More</button>
            </div>
            <div>
              <img
                src={require("../../assets/images/undraw_social_thinking_7ule.svg")}
              />
            </div>
          </div>
        </section>
        <section className="footer">
          <ul>
            <li>LEARN MORE</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li>EDUCATION</li>
            <li>Blog</li>
            <li>Blog</li>
            <li>Blog</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>FROM THE BLOG</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li>FOLLOW US</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
        </section>
      </div>
    );
  }
}
