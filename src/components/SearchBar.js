import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const inputDefault = "Search GitHub";
  const inputType = "text";
  const buttonId = "search";
  return (
    <section className="search-bar">
      <input type={inputType} name="SearchBar" value={inputDefault}></input>
      <button id={buttonId}></button>
    </section>
  );
};

export default SearchBar;
