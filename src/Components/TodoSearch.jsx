import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = () => {
  return (
    <div className="searchInputContainer">
      <input type="text" placeholder="Buscar ToDo..." className="searchInput" />
    </div>
  );
};

export { TodoSearch };
