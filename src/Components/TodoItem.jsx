import React from "react";
import { IconButton, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "../styles/TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className="item">
      <div className="textContainer">
        <Checkbox
          checked={undefined}
          inputProps={{ "aria-label": "primary checkbox" }}
          color="primary"
        />
        <p>{props.text}</p>
      </div>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </li>
  );
};

export { TodoItem };
