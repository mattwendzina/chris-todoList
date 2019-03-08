import React from "react";
import PropTypes from "prop-types";

const TodoItem = props => (
  <li>
    <button onClick={props.onComplete}>Complete</button>
    {props.title} - {props.status ? "Complete" : "To Do"}
    <button onClick={props.onDelete}>X</button>
  </li>
);

TodoItem.propType = {
  title: PropTypes.string.isRequired
};

export default TodoItem;
