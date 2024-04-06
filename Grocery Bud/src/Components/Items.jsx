import SingeItem from "./SingeItem";

const Items = ({ items, deleteItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingeItem key={item.id} item={item} deleteItem={deleteItem} editItem={editItem} />;
      })}
    </div>
  );
};
export default Items;
