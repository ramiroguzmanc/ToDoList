import React from "react";
import { AppUI } from "./Containers/AppUI";
import { TodoProvider } from "./Context";
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

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
