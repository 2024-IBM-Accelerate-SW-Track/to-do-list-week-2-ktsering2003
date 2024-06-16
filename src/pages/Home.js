import React, { Component } from "react";
import AddTodo from "../component/AddTodo";
import Todos from "../component/todos";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    if (this.state.todos.find(t => t.content === todo.content)) {
      return; // Do not add duplicate tasks
    }
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="Home">
        <div className="home-wrapper">
          <div className="hero-section">
            <h2 className="hero-title">Welcome to Your To-Do List</h2>
            <h5 className="hero-subtitle">Organize your tasks efficiently</h5>
          </div>
          <div className="home-container">
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
