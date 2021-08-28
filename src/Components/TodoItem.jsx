import React from "react";
import { IconButton, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "../styles/TodoItem.css";

const TodoItem = (props) => {
  const onComplete = (task) => {
    alert("Felicidades, completaste la tarea: " + task);
  };

  const onDelete = () => {
    alert("Eliminaste una tarea");
  };

  return (
    <li className="item">
      <div className="textContainer">
        <Checkbox
          defaultChecked={props.completed}
          inputProps={{ "aria-label": "primary checkbox" }}
          color="primary"
          onClick={() => onComplete(props.text)}
        />
        <p className={props.completed ? "textTaskCompleted" : ""}>
          {props.text}
        </p>
      </div>
      <IconButton aria-label="delete" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
};

export { TodoItem };
