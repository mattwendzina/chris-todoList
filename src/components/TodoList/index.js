import React from "react";
import TodoItem from "../TodoItem";

const TodoList = props => (
  <ul>
    {props.todos.map((item, idx) => (
      <TodoItem
        key={idx}
        title={item.title}
        status={item.complete}
        onDelete={() => props.onDelete(idx)}
        onComplete={() => props.onComplete(idx)}
      />
    ))}
  </ul>
);

export default TodoList;
