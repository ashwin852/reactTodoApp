import { useState } from "react";
import AddItem from "./Components/AddItem";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SearchItem from "./Components/SearchItem";

function App() {
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

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  const addItem = (newItem) => {
    //if items have length then take the last element's id in the array andd inc by 1
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {
      id,
      lable: newItem,
      checked: false,
    };
    console.log(addNewItem);
    const newListItems = [...items, addNewItem];
    setItems(newListItems);
    localStorage.setItem("todo_List", JSON.stringify(newListItems));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    if (!newItem) return; //No Nothing
    addItem(newItem);
    setNewItem(""); //Clears the input field after the enter key hit
  };

  const userInfo = "Ashwin";
  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.lable.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheckBoxClick={handleCheckBoxClick}
        handleCheckBoxDelete={handleCheckBoxDelete}
      />
      <Footer itemsLength={items.length} />
    </div>
  );
}

export default App;
