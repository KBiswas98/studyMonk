import React, { Component } from "react";
import "./campain.scss";
import axios from "axios";

export default class Campain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campainName: "",
      campainImage: null,
      tableData: []
    };
    this.handelCampainname = this.handelCampainname.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelCampainImgae = this.handelCampainImgae.bind(this);
  }

  handelCampainname(event) {
    this.setState({ campainName: event.target.value });
  }

  handelCampainImgae(event) {
    this.setState({ campainImage: event.target.files });
  }

  handelSubmit(event) {
      console.log(this.state)
    event.preventDefault();
    const formData = new FormData();
    // formData.append('name', this.state.campainName);
    formData.append('file', this.state.campainImage[0]);
    axios
      .post("http://localhost:5000/campain/add", {name: this.state.campainName, image: this.state.campainImage[0]})
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (
      <div className="campain_holder">
        <div className="campain">
          <div>
            <form onSubmit={this.handelSubmit}>
              <label>Campain name</label>
              <input
                className="text_input"
                type="text"
                placeholder="Name of your add campain."
                onChange={this.handelCampainname}
              />
              <label>Image of the campain</label>

              <label id="media">
                Enter Your File
                <input
                  type="file"
                  style={{ size: "60" }}
                  onChange={this.handelCampainImgae}
                />
              </label>
              <input className="submit" type="submit" value="Add Campain" />
            </form>
          </div>

          <div className="all_campains">
            <table>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Create date</th>
                <th>Platfrom</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Samsung</td>
                <td>
                  <img
                    src={require("../../../assets/images/undraw_social_girl_562b.svg")}
                  />
                </td>
                <td>5/8/9</td>
                <td>Facebook</td>
              </tr>
              <tr>
                <td>2</td>
                <td>msung</td>
                <td>
                  <img
                    src={require("../../../assets/images/undraw_social_girl_562b.svg")}
                  />
                </td>
                <td>5/8/9</td>
                <td>Facebook</td>
              </tr>
              <tr>
                <td>3</td>
                <td>amsung</td>
                <td>
                  <img
                    src={require("../../../assets/images/undraw_social_girl_562b.svg")}
                  />
                </td>
                <td>25/8/9</td>
                <td>Twitter</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
