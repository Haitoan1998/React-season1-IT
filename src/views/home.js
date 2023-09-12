import React, { Component } from "react";
import Color from "./HOC/color";
import anh from "../assets/images/anh.jpg";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props.value);
    console.log(this.props);
    let listUsers = this.props.dataRedux;
    return (
      <div>
        HOME
        {/* <img src={anh} /> */}
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <div>
                {item.id}
                {item.name}
                <span
                  onClick={() => {
                    this.props.deleteUserRedux(item);
                  }}
                >
                  X
                </span>
              </div>
            );
          })}
        <button
          onClick={() => {
            this.props.addUserRedux();
          }}
        >
          ADD
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => {
      dispatch({ type: "DELETE_USER", payload: userDelete });
    },
    addUserRedux: () => {
      dispatch({ type: "ADD_USER" });
    },
  };
};
// Bọc component Home bằng HOC Color
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
