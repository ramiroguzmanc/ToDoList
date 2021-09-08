import React, { useState } from "react";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Containers/TodoList";
import { TodoItem } from "./Components/TodoItem";
import "./App.css";

// const defaultToDos = [
//   { id: 1, text: "Cortar cebolla", completed: true },
//   { id: 2, text: "Tomar el curso de Intro de React", completed: false },
//   {
//     id: 3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit eget libero nec consectetur. Donec vel risus sapien. Duis tincidunt id nibh a cursus. Vivamus quis velit eget nibh bibendum interdum. ",
//     completed: false,
//   },
//   { id: 4, text: "Llorar con la llorona", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [toDos, saveToDos] = useLocalStorage("TODOS_V1", []);

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
    <React.Fragment>
      <h1 className="title">📌Your To Do List 🧾</h1>
      <TodoList>
        <TodoCounter total={totalToDos} completed={completedToDos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
}

export default App;
