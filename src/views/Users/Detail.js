import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class Detail extends Component {
  state = {
    user: {},
  };
  componentDidMount = async () => {
    let id =
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ];
    let res = await axios.get(`https://reqres.in/api/users/${id}`);
    this.setState({ user: res.data.data });
  };
  render() {
    return (
      <div>
        {this.state.user.id}
        {this.state.user.email}
        <button>
          <NavLink to={"/Users"}>Back</NavLink>
        </button>
      </div>
    );
  }
}
export default Detail;
