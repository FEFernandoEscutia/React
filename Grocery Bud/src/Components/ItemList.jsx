import Item from "./Item";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { name, index } = item;
        return (
          <div>
            <Item key={index} name={name} />
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
