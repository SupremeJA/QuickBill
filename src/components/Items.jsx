import { MdDeleteForever } from "react-icons/md";

const Items = ({ item, onDelete }) => {
  return (
    <div className="flex justify-between items-center mt-4 bg-white text-black px-4 py-2 shadow-sm rounded-lg ">
      <div>
        <h2 className="text-xl text-bold">{item.itemName}</h2>
        <p className="text-sm text-slate-500 mt-1">
          {item.quantity}X @ {item.price}
        </p>

        <p className="text-md text-slate-500">₦ {item.price}</p>
      </div>
      <a
        className="text-2xl hover:text-red-500"
        onClick={() => onDelete(item.id)}
      >
        <MdDeleteForever />
      </a>
    </div>
  );
};

export default Items;
