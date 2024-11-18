import { range } from "../utils/range";
import { memo } from "react";

const Grid = ({ gridLen }) => {
  console.log("Grid component is being rendered");
  return (
    <div className="grid-wrapper" style={{ "--grid-len": gridLen }}>
      {range(gridLen).map((rowIdx) => {
        return (
          <div className="row" key={rowIdx}>
            {range(gridLen).map((colIdx) => {
              return (
                <div className="cell" key={colIdx}>
                  {`${rowIdx}-${colIdx}`}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default memo(Grid);
