import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./MyComponent";
import LifecycleExample from "./LifeCycle";
import ListTodo from "./ToDo/listToDo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./home";
import ListUser from "./Users/listUsers";
import Detail from "./Users/Detail";

// class PrivateRouter extends Component {}
function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <MyComponent />
    <LifecycleExample value={22} /> */}
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/ToDos" element={<ListTodo />} />{" "}
            <Route
              path="/lifeCycle"
              element={<LifecycleExample value={22} />}
            />{" "}
            <Route path="/users" element={<ListUser />} />{" "}
            <Route path="/users/:id" element={<Detail />} />
          </Routes>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
}

export default App;
