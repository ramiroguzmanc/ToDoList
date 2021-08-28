import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "../styles/CreateTodoButton.css";

const CreateTodoButton = () => {
  const handleCreate = () => {
    alert("Estoy funcionando valemía");
  };

  return (
    <button className="button" onClick={handleCreate}>
      <AddIcon />
    </button>
  );
};

export { CreateTodoButton };
