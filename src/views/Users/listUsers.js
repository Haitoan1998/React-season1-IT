import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
class ListUser extends Component {
  state = {
    listUsers: [],
  };
  componentDidMount = async () => {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    console.log(res.data.data);
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  };
  render() {
    let listUsers = this.state.listUsers;
    return (
      <div>
        {listUsers && listUsers.length > 0 ? (
          <>
            {listUsers.map((item) => {
              return (
                <div key={item.id}>
                  <NavLink to={`/Users/${item.id}`}>
                    {" "}
                    {item.first_name}
                    {item.first_name}
                  </NavLink>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    );
  }
}

export default ListUser;
