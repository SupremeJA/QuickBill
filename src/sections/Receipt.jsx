import ReceiptItem from "../components/ReceiptItem";

const Receipt = ({ items, cName, bName }) => {
  return (
    <section className="w-full md:w-[40%] md:max-w-[500px] text-slate-700 bg-slate-200 rounded-xl p-6 shadow-md">
      <div className="p-10 bg-white rounded-xl shadow-xl/20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Hello {cName}</h1>
          <p>Here's your receipt from {bName} </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Items Purchased:</h2>

          {items && items.length > 0
            ? items.map((item) => <ReceiptItem key={item.id} item={item} />)
            : "null"}
        </div>

        <span className="flex justify-between font-bold text-lg border-t-2 border-slate-500 pt-4 mt-6">
          <h1>Total:</h1>
          <p>
            ₦
            {items
              .reduce((acc, item) => acc + Number(item.price), 0)
              .toFixed(2)}
          </p>
        </span>
      </div>
    </section>
  );
};

export default Receipt;
