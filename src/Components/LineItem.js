import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

const LineItem = ({ item, handleCheckBoxClick, handleCheckBoxDelete }) => {
  return (
    //passing id as key is to let react know which belongs to what id internally
    <li className="item" key={item.id}>
      <input
        class="form-check-input"
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheckBoxClick(item.id)}
      ></input>
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheckBoxClick(item.id)}
      >
        {item.lable}
      </label>
      <BsFillTrashFill
        role="button"
        tabIndex="0"
        onClick={() => handleCheckBoxDelete(item.id)}
        aria-label={"Delete ${item.item}"}
      />
    </li>
  );
};

export default LineItem;
