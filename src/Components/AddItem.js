import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    // No need to pass event (e) as a param to handleSubmit
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        placeholder="Add Item"
        id="addItem"
        type="text"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} //Controlled Input
      ></input>
      <button type="submit">
        <FaPlus style={{ marginBottom: "15px" }} />
      </button>
    </form>
  );
};

export default AddItem;
