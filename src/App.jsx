import { useState } from "react";
import { Editor, Receipt } from "./sections";

function App() {
  const [items, setItems] = useState([]);
  const [cName, setCName] = useState("");
  const [bName, setBName] = useState(() => {
    const saved = localStorage.getItem("businessName");
    return saved || "";
  });

  const [logo, setLogo] = useState(null);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItm = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-center w-full max-h-screen py-6 gap-10 ">
      <Editor
        onAdd={addItem}
        onDelete={deleteItm}
        items={items}
        setCName={setCName}
        setBName={setBName}
        bName={bName}
        setLogo={setLogo}
      />
      <Receipt items={items} cName={cName} bName={bName} logo={logo} />
    </div>
  );
}

export default App;
