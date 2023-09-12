import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./App.scss";

class Nav extends Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink
          to={{
            pathname: "/Todos",
            search: "?sort=name",
            hash: "#the-hash",
            state: { fromDashboard: true },
          }}
        >
          Todos
        </NavLink>
        <NavLink to="/lifeCycle">About</NavLink>{" "}
        <NavLink to="/Users">Users</NavLink>
      </div>
    );
  }
}

export default Nav;
