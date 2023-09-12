import React, { Component } from "react";

class AddComponent extends Component {
  state = { title: "", salary: "" };

  render() {
    return (
      <>
        {" "}
        <form action="/action_page.php">
          <label htmlFor="fname">title:</label>
          <input
            type="text"
            id="fname"
            value={this.state.title}
            onChange={(event) => {
              this.setState({ ...this.state, title: event.target.value });
            }}
          />
          <label htmlFor="lname">salary</label>
          <input
            type="text"
            id="lname"
            value={this.state.salary}
            onChange={(event) => {
              this.setState({ ...this.state, salary: event.target.value });
            }}
          />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => {
              event.preventDefault();
              if (!this.state.title || !this.state.salary) {
                alert("chưa nhâp");
                return;
              }
              this.props.addNewJob({
                id: Math.random(),
                title: this.state.title,
                salary: this.state.salary,
              });
              this.setState({ ...this.state, title: "", salary: "" });
            }}
          />
        </form>
      </>
    );
  }
}
export default AddComponent;
