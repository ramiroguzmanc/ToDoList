import React, { useState, useEffect } from "react";

import { AppUI } from "./Containers/AppUI";
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
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

function App() {
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

  // useEffect(() => {
  //   console.log("Ejecutando Effect");
  // }, [totalToDos]);

  return (
    <AppUI
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      error={error}
      loading={loading}
      searchedToDos={searchedToDos}
      onToDoStateChange={onToDoStateChange}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;
