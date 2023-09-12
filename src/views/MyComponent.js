import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends Component {
  state = {
    job: [
      { id: 1, title: "test", salary: 100 },
      { id: 2, title: "intern", salary: 1200 },
      { id: 3, title: "junior", salary: 2000 },
    ],
  };
  addNewJob = (newjob) => {
    this.setState({ job: [...this.state.job, newjob] });
  };
  deleteJob = (job) => {
    let arrJob = this.state.job;
    let newArrJob = arrJob.filter((item) => {
      return item.id != job.id;
    });
    this.setState({ job: newArrJob });
  };
  handleClick = () => {
    alert("ok");
  };
  render() {
    return (
      <div>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent arrJob={this.state.job} deleteJob={this.deleteJob}>
          {"giá trị trong childeren"}
        </ChildComponent>
      </div>
    );
  }
}
export default MyComponent;
