import React from "react";
import { TodoContext } from "../Context";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Containers/TodoList";
import { TodoItem } from "../Components/TodoItem";

const AppUI = () => {
  return (
    <React.Fragment>
      <h1 className="title">📌Your To Do List 🧾</h1>
      <TodoList>
        <TodoCounter />
        <TodoSearch />
        <TodoContext.Consumer>
          {({
            error,
            loading,
            searchedToDos,
            onToDoStateChange,
            deleteToDo,
          }) => (
            <>
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
            </>
          )}
        </TodoContext.Consumer>
        <CreateTodoButton />
      </TodoList>
    </React.Fragment>
  );
};

export { AppUI };
