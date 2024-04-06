

const SingeItem = ({ item, deleteItem, editItem }) => {
 
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
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
