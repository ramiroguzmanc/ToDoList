import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "../styles/CreateTodoButton.css";

const CreateTodoButton = () => {
  return (
    <button className="button">
      <AddIcon />
    </button>
  );
};

export { CreateTodoButton };
