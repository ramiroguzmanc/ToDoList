import React from "react";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Containers/TodoList";
import { TodoItem } from "./Components/TodoItem";
// import './App.css';

const toDos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de Intro de React", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <CreateTodoButton />
      <TodoSearch />
      <TodoList>
        {toDos.map((todo, idx) => (
          <TodoItem text={todo.text} key={idx} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
