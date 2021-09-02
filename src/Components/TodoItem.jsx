import React from "react";
import { IconButton, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "../styles/TodoItem.css";

const TodoItem = (props) => {
  const onComplete = (taskID) => {
    props.onToDoStateChange(taskID);
  };

  return (
    <li className="item">
      <div className="textContainer">
        <Checkbox
          checked={props.completed}
          inputProps={{ "aria-label": "primary checkbox" }}
          color="primary"
          onClick={() => onComplete(props.id)}
        />
        <p className={props.completed ? "textTaskCompleted" : ""}>
          {props.text}
        </p>
      </div>
      <IconButton
        aria-label="delete"
        onClick={() => props.deleteToDo(props.id)}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
};

export { TodoItem };
