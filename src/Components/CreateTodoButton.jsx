import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "../styles/CreateTodoButton.css";
import { useContext } from "react";
import { TodoContext } from "../Context";

const CreateTodoButton = () => {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <button className="button" onClick={() => setOpenModal(true)}>
      <AddIcon />
    </button>
  );
};

export { CreateTodoButton };
