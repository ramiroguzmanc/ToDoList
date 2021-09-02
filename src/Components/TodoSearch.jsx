import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onInputTextChange = (ev) => {
    setSearchValue(ev.target.value);
  };

  return (
    <div className="searchInputContainer">
      <input
        type="text"
        placeholder="Buscar ToDo..."
        className="searchInput"
        value={searchValue}
        onChange={onInputTextChange}
      />
    </div>
  );
};

export { TodoSearch };
