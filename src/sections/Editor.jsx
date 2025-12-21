import { useEffect, useState } from "react";
import Items from "../components/Items";
import Input from "../components/Input";

const Editor = ({
  onAdd,
  onDelete,
  items,
  setCName,
  setBName,
  bName,
  setLogo,
}) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleItems = (e) => {
    e.preventDefault();

    const data = {
      id: Date.now(),
      itemName,
      quantity,
      price,
    };

    onAdd(data);
  };

  const handleImage = (e) => {
    e.preventDefault();

    const data = e.target.files[0];
    setLogo(URL.createObjectURL(data));
  };

  useEffect(() => {
    localStorage.setItem("businessName", bName);
  }, [bName]);

  return (
    <section className="flex flex-col gap-10 p-10 rounded-xl shadow-xl/20">
      <form onSubmit={handleItems} className="flex flex-col">
        <div className="mb-4">
          <label>Business Name</label>
          <input
            type="text"
            placeholder="e.g mama nkechi foods"
            value={bName || ""}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            onChange={(e) => setBName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Business Logo</label>
          <input
            type="file"
            accept="image/*" // Only allow images (jpg, png)
            className="mb-4 block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-black
                  hover:file:bg-violet-100"
            onChange={handleImage}
          />
        </div>

        <div>
          <label>Customer Name</label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            className="generalInput"
            onChange={(e) => setCName(e.target.value)}
          />

          <div className="flex gap-2 mt-4">
            <Input
              type={"text"}
              placeholder={"Item name"}
              onChange={(e) => setItemName(e.target.value)}
            />

            <Input
              type={"number"}
              placeholder={"Qty"}
              style={"w-24!"}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <Input
              type={"number"}
              placeholder={"Price"}
              style="w-24!"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all w-32">
            Add Item
          </button>
        </div>
      </form>

      <div className="p-5 rounded-xl max-h-70 overflow-y-auto">
        {items &&
          items.map((i) => <Items key={i.id} onDelete={onDelete} item={i} />)}
      </div>
    </section>
  );
};

export default Editor;
