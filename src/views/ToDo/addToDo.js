import React, { Component } from "react";
import { toast } from "react-toastify";
class AddTodo extends Component {
  state = {
    title: "",
  };
  render() {
    console.log("render");
    return (
      <div className="add-todo">
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => {
            this.setState({ title: event.target.value });
          }}
        />
        <button
          onClick={() => {
            if (!this.state.title) {
              toast.error("Chưa nhập");
              return;
            }
            this.props.addNewToDo({
              id: Math.floor(Math.random() * 1000),
              title: this.state.title,
            });
            this.setState({ title: "" });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddTodo;
