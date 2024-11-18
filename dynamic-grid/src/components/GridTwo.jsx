import { range } from "../utils/range";

const GridTwo = ({ gridLen }) => {
  return (
    <div
      className="grid-two-wrapper"
      style={{
        "--grid-two-len": gridLen,
      }}
    >
      {range(gridLen).map((rowIdx) => {
        return range(gridLen).map((colIdx) => {
          return <div key={`${rowIdx}-${colIdx}`} className="cell-two"></div>;
        });
      })}
    </div>
  );
};

export default GridTwo;
