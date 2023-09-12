import React, { Component } from "react";
import Color from "./HOC/color";

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      valueState: 1,
      value: this.props.value,
    };
    console.log("1. Constructor is called.");
  }
  componentDidMount() {
    console.log("4. Component did mount.");
    this.api("api trong DidMount");
    this.setState({ ...this.state, value: 2 });
  }

  componentDidUpdate(prevProps, prevState) {
    clearTimeout(this.timeout);
    this.api("api trong DidUpdate");
    console.log("4. Component did update.");
  }
  shouldComponentUpdate(nextProps, nextState) {
    // Kiểm tra xem prop count mới có giống prop count hiện tại không
    if (nextState.valueState === this.state.valueState) {
      return true; // Cho phép component render lại nếu có sự thay đổi
    }
    return false; //Ngăn component render lại nếu không có sự thay đổi
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("2. Biến prop của component ", nextProps);
    console.log("2. Biến state của component ", prevState);
    if (nextProps.value === prevState.value) {
      return null;
    }
    return { value: nextProps.value };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    console.log("Component will unmount.");
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("set state ");
  };
  api = (value) => {
    this.timeout = setTimeout(() => {
      console.log(value);
    }, 2000);
  };

  render() {
    console.log("3. Render is called.");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default Color(LifecycleExample);
