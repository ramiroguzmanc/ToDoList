import React, { useContext } from "react";
import { TodoContext } from "../Context";
import "../styles/TodoCounter.css";

const TodoCounter = () => {
  const { completedToDos, totalToDos } = useContext(TodoContext);

  return (
    <span className="TodoCounter">
      Has completado <b>{completedToDos}</b> de <b>{totalToDos}</b> ToDos
    </span>
  );
};

export { TodoCounter };
