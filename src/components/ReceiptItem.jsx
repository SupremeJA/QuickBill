const ReceiptItem = ({ item }) => {
  return (
    <div className="flex justify-between mb-4">
      <h1 key={item.id}>
        {item.quantity}X {item.itemName}
      </h1>
      <p>₦{item.price * item.quantity}</p>
    </div>
  );
};
export default ReceiptItem;
