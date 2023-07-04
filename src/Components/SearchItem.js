import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchItem">Add Item</label>
      <input
        placeholder="Search Items"
        id="searchItem"
        type="text"
        value={search}
        role="searchBox"
        onChange={(e) => setSearch(e.target.value)} //Controlled Input
      ></input>
    </form>
  );
};

export default SearchItem;
