import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = () => {
  return (
    <React.Fragment>
      <input type="text" placeholder="Cebolla" className="searchInput" />
    </React.Fragment>
  );
};

export { TodoSearch };
