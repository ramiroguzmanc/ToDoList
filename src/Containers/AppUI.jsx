import React from "react";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Containers/TodoList";
import { TodoItem } from "../Components/TodoItem";

const AppUI = ({
  totalToDos,
  completedToDos,
  searchValue,
  setSearchValue,
  error,
  loading,
  searchedToDos,
  onToDoStateChange,
  deleteToDo,
}) => {
  return (
    <React.Fragment>
      <h1 className="title">📌Your To Do List 🧾</h1>
      <TodoList>
        <TodoCounter total={totalToDos} completed={completedToDos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

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
    </React.Fragment>
  );
};

export { AppUI };
