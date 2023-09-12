import React, { Component } from "react";

class ChildComponent extends Component {
  state = {
    showjob: true,
  };
  render() {
    let job = this.props.arrJob;
    let deletedJob = this.props.deleteJob;
    return (
      <div>
        {this.state.showjob ? (
          <>
            <div>
              {" "}
              {job.map((item) => {
                if (item.salary >= 1200) {
                  return (
                    <div>
                      {item.title}
                      {item.salary}
                      <button
                        onClick={() => {
                          deletedJob(item);
                        }}
                      >
                        Xóa
                      </button>
                    </div>
                  );
                }
              })}
            </div>
            <button
              onClick={() => {
                this.setState({ showjob: false });
              }}
            >
              HIDE
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              this.setState({ showjob: true });
            }}
          >
            SHOW
          </button>
        )}
      </div>
    );
  }
}
export default ChildComponent;
