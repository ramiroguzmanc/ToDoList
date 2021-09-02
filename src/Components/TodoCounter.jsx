import React from "react";
import "../styles/TodoCounter.css";

const TodoCounter = ({ total, completed }) => {
  return (
    <span className="TodoCounter">
      Has completado <b>{completed}</b> de <b>{total}</b> ToDos
    </span>
  );
};

export { TodoCounter };
