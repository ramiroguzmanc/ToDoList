import React, { useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { TodoContext } from "../Context";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Containers/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { Modal } from "../Containers/Modal";
import { TodoForm } from "./TodoForm";

import "../styles/Modal.css";

const AppUI = () => {
  const {
    error,
    loading,
    searchedToDos,
    onToDoStateChange,
    deleteToDo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <React.Fragment>
      <h1 className="title">📌Your To Do List 🧾</h1>
      <TodoList>
        <TodoCounter />
        <TodoSearch />
        {error && <p>Ha ocurrido un error...</p>}
        {loading && <p>Cargando...</p>}
        {!loading && !searchedToDos.length && <p>Crea tu primer ToDo</p>}

        {searchedToDos.map((todo) => (
          <TodoItem
            text={todo.text}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            onToDoStateChange={onToDoStateChange}
            deleteToDo={deleteToDo}
          />
        ))}
        <CreateTodoButton />
      </TodoList>
      {openModal && (
        <Modal>
          <CloseIcon
            className="ModalCloseButton"
            onClick={() => setOpenModal(false)}
          />
          <div className="FormContainer">
            <h1>Agregar nuevo To Do</h1>
            <TodoForm setOpenModal={setOpenModal} />
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export { AppUI };
