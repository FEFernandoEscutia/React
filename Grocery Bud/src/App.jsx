import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Components/Form";
import Items from "./Components/Items";
import { ToastContainer, toast } from "react-toastify";
const setLocalStorage = (items) => {
  //this function is used to set the items in the local storage.
  localStorage.setItem("list", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("list") || "[]"); // In this line, we are getting the list from the local storage and if it is null, we are setting it to an empty array.

const App = () => {
  const [items, setItems] = useState(defaultList);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems); //this line is used to set the items in the state
    setLocalStorage(newItems); //this line is used to set the items in the local storage.
    toast.success('item added to the list')
  };
  const deleteItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item deleted from the list')
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} deleteItem={deleteItem} editItem={editItem} />
    </section>
  );
};

export default App;
