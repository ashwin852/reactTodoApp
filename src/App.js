import { useEffect, useState } from "react";
import AddItem from "./Components/AddItem";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SearchItem from "./Components/SearchItem";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Will render only when its dependecies changes
  //cannot use async directly in useEffect
  useEffect(() => {
    const fetchItems = async () => {
      try {
        //When an exception is thrown, the code execution within the try block is immediately halted, and the control flow jumps to the corresponding catch block.
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not found");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        console.log(err);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    //Simulating the load time with rest all
    setTimeout(() => {
      // IIFE (Immediately Invoked Function Expression).This pattern is often used when you want to execute an asynchronous operation immediately without assigning the result to a variable or using the function elsewhere.
      (async () => await fetchItems())();
    }, 2000);
  }, []);

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
      <main>
        {/* conditional visibilities */}
        {isLoading && <p>Loading List Items</p>}
        {/* If fetchError has something then do this */}
        {fetchError && (
          <p>{`Something went wrong. Pls contact system administrator`}</p>
        )}
        {!isLoading && !fetchError && (
          <Content
            items={items.filter((item) =>
              item.lable.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheckBoxClick={handleCheckBoxClick}
            handleCheckBoxDelete={handleCheckBoxDelete}
          />
        )}
      </main>
      <Footer itemsLength={items.length} />
    </div>
  );
}

export default App;
