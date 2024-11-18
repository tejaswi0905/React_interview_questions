import { getStatusMessage } from "../utils/statusMessage";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function BoxesGrid({ boxes, setBoxes, value }) {
  console.log(boxes, value);
  const [xsTurn, SetXsTurn] = useState(true);

  const handleClick = (index) => {
    const newBoxes = [...boxes];
    let char;
    if (xsTurn === true) {
      char = "X";
    } else {
      char = "O";
    }
    SetXsTurn((cur) => {
      return !cur;
    });
    newBoxes[index] = char;
    setBoxes(newBoxes);
  };

  // const handleReset = () => {
  //   setBoxes(initialBoxes);
  //   SetXsTurn(true);
  // };

  let statusMessage = getStatusMessage(boxes, value, xsTurn);
  return (
    <div className="section">
      <div className="section-top">
        {/* <div>{statusMessage}</div> */}
        <div>
          <button
            className="reset-btn"
            // onClick={() => {
            //   handleReset();
            // }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="box-grid">
        {boxes.map((val, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                handleClick(index);
              }}
              value={val}
            ></Button>
          );
        })}
      </div>
    </div>
  );
}
