import React from "react";
import ItemsList from "./ItemsList";

const Content = ({ items, handleCheckBoxClick, handleCheckBoxDelete }) => {
  return (
    <main>
      {items.length === 0 ? (
        <h3>List is empty</h3>
      ) : (
        <ItemsList
          items={items}
          handleCheckBoxClick={handleCheckBoxClick}
          handleCheckBoxDelete={handleCheckBoxDelete}
        />
      )}
    </main>
  );
};

export default Content;
