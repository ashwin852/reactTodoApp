import React from "react";
import ItemsList from "./ItemsList";

const Content = ({ items, handleCheckBoxClick, handleCheckBoxDelete }) => {
  return (
    <>
      {items.length === 0 ? (
        <h3>List is empty</h3>
      ) : (
        <ItemsList
          items={items}
          handleCheckBoxClick={handleCheckBoxClick}
          handleCheckBoxDelete={handleCheckBoxDelete}
        />
      )}
    </>
  );
};

export default Content;
