import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");

  const completedToDos = toDos.filter((todo) => !!todo.completed).length; // Doble falso (!!) es verdadero = true, esto sería el equivalente a poner todo.completed == true
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if (searchValue.length >= 1) {
    searchedToDos = toDos.filter((todo) => {
      const toDoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  } else {
    searchedToDos = toDos;
  }

  const onToDoStateChange = function (id) {
    const todoIndex = toDos.findIndex((todo) => todo.id === id);
    const newToDos = [...toDos];
    newToDos[todoIndex].completed = !newToDos[todoIndex].completed;
    saveToDos(newToDos);
  };

  const deleteToDo = function (id) {
    const todoIndex = toDos.findIndex((todo) => todo.id === id);
    const newToDos = [...toDos];
    newToDos.splice(todoIndex, 1);
    saveToDos(newToDos);
  };

  return (
    <TodoContext.Provider
      value={{
        totalToDos,
        completedToDos,
        searchValue,
        setSearchValue,
        error,
        loading,
        searchedToDos,
        onToDoStateChange,
        deleteToDo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
