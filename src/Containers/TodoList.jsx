import React from "react";
import "../styles/TodoList.css";

const TodoList = (props) => {
  return (
    <section className="container">
      <ul className="">{props.children}</ul>
    </section>
  );
};

export { TodoList };
