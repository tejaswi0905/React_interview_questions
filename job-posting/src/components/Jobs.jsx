/* eslint-disable react/prop-types */

const Jobs = ({ items }) => {
  console.log(items);
  if (!items || items.length === 0) {
    console.log("Inside the if");
    return null;
  }
  return (
    <div className="items">
      {items.map((item) => {
        return <div key={item?.id}>{item?.name}</div>;
      })}
    </div>
  );
};

export default Jobs;
