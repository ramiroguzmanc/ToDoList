import React, { useContext } from "react";
import { TodoContext } from "../Context";
import "../styles/TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

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
