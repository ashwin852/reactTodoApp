import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    // No need to pass event (e) as a param to handleSubmit
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        placeholder="Add Item"
        id="addItem"
        ref={inputRef}
        type="text"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} //Controlled Input
      ></input>
      <button type="submit" onClick={() => inputRef.current.focus()}>
        <FaPlus style={{ marginBottom: "15px" }} />
      </button>
    </form>
  );
};

export default AddItem;
