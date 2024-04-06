import { useState } from "react";

const SingeItem = ({ item, deleteItem }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={()=>deleteItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
};
export default SingeItem;
