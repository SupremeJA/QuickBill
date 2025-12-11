import { useState } from "react";
import { Editor, Receipt } from "./sections";

function App() {
  const [items, setItems] = useState([]);
  const [cName, setCName] = useState("");
  const [bName, setBName] = useState("");

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItm = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className="flex flex-col md:flex-row justify-center w-full max-h-screen py-6 gap-10 ">
      <Editor
        onAdd={addItem}
        onDelete={deleteItm}
        items={items}
        setCName={setCName}
        setBName={setBName}
      />
      <Receipt items={items} cName={cName} bName={bName} />
    </div>
  );
}

export default App;
