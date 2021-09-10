import React from "react";
import { useContext, useState } from "react";
import { TodoContext } from "../Context";
import "../styles/Modal.css";

const TodoForm = ({ setOpenModal }) => {
  const { addToDo } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState("");

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(newTodoValue);
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="TodoTextarea"
        placeholder="Cortar la cebolla para el almuerzo..."
        value={newTodoValue}
        onChange={onChange}
      ></textarea>
      <div className="ButtonsContainer">
        <button
          onClick={onCancel}
          type="button"
          className="Button CancelButton"
        >
          Cancelar
        </button>
        <button
          onClick={onSubmit}
          type="submit"
          className="Button SubmitButton"
        >
          Añadir To Do
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
