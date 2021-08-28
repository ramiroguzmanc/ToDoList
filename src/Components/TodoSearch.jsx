import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = () => {
  const onInputTextChange = (ev) => {
    console.log(ev.target.value);
  };

  return (
    <div className="searchInputContainer">
      <input
        type="text"
        placeholder="Buscar ToDo..."
        className="searchInput"
        onChange={onInputTextChange}
      />
    </div>
  );
};

export { TodoSearch };
