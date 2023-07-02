import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Content = () => {
  const toDoList = [
    {
      id: 1,
      lable: "Learn React",
      checked: false,
    },
    {
      id: 2,
      lable: "Create Data Grid",
      checked: false,
    },
    {
      id: 3,
      lable: "Make it more advanced",
      checked: false,
    },
  ];

  const [items, setItems] = useState(toDoList);

  const handleCheckBoxClick = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };
  const handleCheckBoxDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <main>
      {items.length === 0 ? (
        <h3>List is empty</h3>
      ) : (
        <ul>
          {items.map((item) => (
            //passing id as key is to let react know which
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
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Content;
