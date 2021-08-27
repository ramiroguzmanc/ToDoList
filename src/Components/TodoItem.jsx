import React from "react";
import "../styles/TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className="item">
      <span>C</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
};

export { TodoItem };
