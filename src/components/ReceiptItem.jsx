const ReceiptItem = ({ item }) => {
  return (
    <div className="flex justify-between pb-3 border-b-2 border-slate-400/20">
      <h1 key={item.id}>
        {item.quantity} {item.itemName}
      </h1>
      <p className="font-semibold">₦{item.price * item.quantity}</p>
    </div>
  );
};
export default ReceiptItem;
