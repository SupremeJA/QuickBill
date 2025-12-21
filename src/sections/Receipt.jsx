import { useRef } from "react";
import ReceiptItem from "../components/ReceiptItem";
import ReceiptButton from "../components/ReceiptButton";

const Receipt = ({ items, cName, bName, logo }) => {
  const receiptref = useRef(null);
  return (
    <section className="w-full md:w-[40%] md:max-w-[500px] h-full text-mineshaft bg-slate-200 rounded-xl p-6 shadow-md">
      <div
        ref={receiptref}
        className="bg-whisper pt-10 rounded-3xl shadow-xl/20"
      >
        <div className="px-13 ">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 border-2 border-slate-500 rounded-full overflow-hidden relative">
              <img
                src={logo || "https://placehold.co/400x400?text=Logo"}
                alt={`${bName} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold">{bName}</h2>
          </div>
          <div className="mt-8 mb-6">
            <h1 className="text-2xl font-bold">Hello {cName}</h1>
            <p>Here's your receipt</p>
          </div>

          <h2 className="text-lg font-semibold mt-10 mb-4">Items Purchased:</h2>
          <div className="flex flex-col gap-4">
            {items && items.length > 0
              ? items.map((item) => <ReceiptItem key={item.id} item={item} />)
              : "---"}
          </div>
        </div>

        <span className="flex flex-col items-end px-13 p-4 bg-mineshaft text-white">
          <h1 className="text-md font-regular">Total:</h1>
          <p className="font-semibold text-2xl ">
            ₦
            {items
              .reduce((acc, item) => acc + Number(item.price), 0)
              .toFixed(2)}
          </p>
        </span>
      </div>
      <ReceiptButton ref={receiptref} customerName={cName} />
    </section>
  );
};

export default Receipt;
