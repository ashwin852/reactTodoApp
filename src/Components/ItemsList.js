import React from "react";
import LineItem from "./LineItem";

const ItemsList = ({ items, handleCheckBoxClick, handleCheckBoxDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          item={item}
          //We simply need to pass the key id for each list item just for react identification internally, NOTE: No need to recieve it in child component
          key={item.id}
          handleCheckBoxClick={handleCheckBoxClick}
          handleCheckBoxDelete={handleCheckBoxDelete}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
