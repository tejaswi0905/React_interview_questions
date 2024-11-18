/* eslint-disable react/prop-types */
import Item from "./Item";

const Items = ({ items, page }) => {
  const currentPage = page - 1;
  return (
    <div className="items split-grid">
      {items.slice(currentPage, currentPage + 12).map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Items;
