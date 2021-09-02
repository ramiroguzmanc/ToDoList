import React, { useState } from "react";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Containers/TodoList";
import { TodoItem } from "./Components/TodoItem";
import "./App.css";

const defaultToDos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de Intro de React", completed: false },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit eget libero nec consectetur. Donec vel risus sapien. Duis tincidunt id nibh a cursus. Vivamus quis velit eget nibh bibendum interdum. ",
    completed: false,
  },
  { text: "Tomar el curso de Intro de React", completed: true },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  const [toDos, setToDos] = useState(defaultToDos);
  const [searchValue, setSearchValue] = useState("");

  const completedToDos = toDos.filter((todo) => !!todo.completed).length; // Doble falso (!!) es verdadero = true
  const totalToDos = toDos.length;

  return (
    <React.Fragment>
      <h1 className="title">📌Your To Do List 🧾</h1>
      <TodoList>
        <TodoCounter total={totalToDos} completed={completedToDos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        {toDos.map((todo, idx) => (
          <TodoItem text={todo.text} key={idx} completed={todo.completed} />
        ))}
        <CreateTodoButton />
      </TodoList>
    </React.Fragment>
  );
}

export default App;
