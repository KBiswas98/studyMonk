import React, { Component } from "react";
import "./campain.scss";
import axios from "axios";



export default class Campain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campainName: "",
      campainImage: null,
      campinPlatfrom: "facebook",
      tableData: []
    };
    this.handelCampainname = this.handelCampainname.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handelCampainImgae = this.handelCampainImgae.bind(this);
    this.handelPlatfromchange = this.handelPlatfromchange.bind(this);
  }

  componentDidMount() {
    this._fetchRecords();
  }

  _fetchRecords = () => {
    axios
      .get("http://localhost:5000/campain/")
      .then(result => {
        console.log(result);
        this.setState({ tableData: result.data });
      })
      .then(err => {
        console.log(err);
      });
  }

  handelCampainname(event) {
    this.setState({ campainName: event.target.value });
  }

  handelCampainImgae(event) {
    this.setState({ campainImage: event.target.files[0] });
  }

  handelPlatfromchange(platfrom) {
    this.setState({ campinPlatfrom: platfrom });
  }

  handelSubmit(event) {
    console.log(this.state);
    event.preventDefault();

    const formData = new FormData();
    formData.append("campain_name", this.state.campainName);
    formData.append("image", this.state.campainImage);
    formData.append("platfrom", this.state.campinPlatfrom);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    axios
      .post("http://localhost:5000/campain/add", formData, config)
      .then(res => {
        console.log(res);
        this._fetchRecords();
      });
  }

  render() {
    let counter = 0;
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

              <label>Platfrom</label>
              <span>
                <input
                  type="button"
                  onClick={() => this.handelPlatfromchange("facebook")}
                  className={
                    this.state.campinPlatfrom === "facebook"
                      ? "onebutton active "
                      : "onebutton"
                  }
                  value="Facebook"
                />
                <input
                  type="button"
                  onClick={() => this.handelPlatfromchange("twitter")}
                  className={
                    ("onebutton",
                    this.state.campinPlatfrom === "twitter"
                      ? "onebutton active "
                      : "onebutton")
                  }
                  value="Twitter"
                />
              </span>
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

              {this.state.tableData.map(row => (
                <tr>
                  <td>{++counter}</td>
                  <td>{row.name}</td>
                  <td>
                    <img src={row.image_path} />
                  </td>
                  <td>{row.date.replace(/T/, " ").replace(/\..+/, "")}</td>
                  <td>{row.platfrom}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}
