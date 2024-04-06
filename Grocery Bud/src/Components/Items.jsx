import SingeItem from "./SingeItem";

const Items = ({ items, deleteItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingeItem key={item.id} item={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
};
export default Items;
