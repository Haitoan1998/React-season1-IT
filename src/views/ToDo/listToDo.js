import React, { Component } from "react";
import AddTodo from "./addToDo";
import { toast } from "react-toastify";
import Color from "../HOC/color";
import { createBrowserHistory } from "history";

class ListTodo extends Component {
  state = {
    listToDos: [
      { id: "todo1", title: "doing homework" },
      { id: "todo2", title: "music" },
      { id: "todo3", title: "game" },
    ],
  };
  componentDidUpdate = () => {
    let history = createBrowserHistory();
    console.log("a");
    setTimeout(() => {
      history.push("/");
    }, 3000);
  };
  addNewToDo = (todo) => {
    this.setState({ listToDos: [...this.state.listToDos, todo] });
    toast.success("Wow so easy!");
  };
  deleteTodo = (todo) => {
    let arrTodo = this.state.listToDos;
    let newArr = arrTodo.filter((item) => {
      return item.id !== todo.id;
    });
    this.setState({ listToDos: newArr });
    toast.success("Wow so easy!");
  };
  render() {
    let { listToDos } = this.state;
    console.log(this.state);
    return (
      <div className="list-todo-container">
        <AddTodo addNewToDo={this.addNewToDo} />
        <div className="list-todo-content">
          {listToDos && listToDos.length > 0
            ? listToDos.map((item, index) => {
                return (
                  <div>
                    {item.showEdit ? (
                      <input
                        value={item.title}
                        onChange={(event) => {
                          listToDos[index].title = event.target.value;
                          this.setState({ listToDos: listToDos });
                        }}
                      />
                    ) : (
                      <span className={item.id}>{item.title}</span>
                    )}
                    <button
                      onClick={(event) => {
                        if (event.target.textContent === "EDIT") {
                          listToDos[index].showEdit = true;
                          this.setState({ listToDos: listToDos });
                        } else if (event.target.textContent === "SAVE") {
                          delete listToDos[index].showEdit;
                          this.setState({ listToDos: listToDos });
                          toast.success("sửa thành công");
                        }
                      }}
                    >
                      {item.showEdit ? "SAVE" : "EDIT"}
                    </button>
                    <button
                      onClick={() => {
                        this.deleteTodo(item);
                      }}
                    >
                      delete
                    </button>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
export default Color(ListTodo);
