import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/input";
import TodoList from "./components/TodoList";
// import TodoItem from "./components/TodoItem";

// Todo App

// Input
// input field
// button
// Todo List
// todo list item
// delete button
// mark as complete

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ title: "clean the kicthen", completed: false }]
    };
  }

  addATodo = todo => {
    this.setState(state => ({
      todos: [...state.todos, { title: todo, complete: false }]
    }));
  };

  deleteATodo = index => {
    this.setState(state => ({
      todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
    }));
  };

  completeATodo = index => {
    const toChange = this.state.todos[index];
    this.setState(state => ({
      todos: [
        ...state.todos.slice(0, index),
        { ...toChange, complete: !toChange.complete },
        ...state.todos.slice(index + 1)
      ]
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input addItem={this.addATodo} />
          <TodoList
            todos={this.state.todos}
            onDelete={this.deleteATodo}
            onComplete={this.completeATodo}
          />
        </header>
      </div>
    );
  }
}

export default App;
