import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Components/Form";
import Items from "./Components/Items";
const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };
  const deleteItem = (itemId) => {
    const newItems = items.filter((item) =>item.id !== itemId);
    setItems(newItems)
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} deleteItem={deleteItem} />
    </section>
  );
};

export default App;
