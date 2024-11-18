import "./App.css";
import Grid from "./components/Grid";
import { useId, useState } from "react";
import { formatTime } from "./utils/format";
import useTime from "./hooks/useTime";
import GridTwo from "./components/GridTwo";

function App() {
  const [gridLen, setGridLen] = useState(3);
  const id = useId();
  const time = useTime();
  return (
    <>
      <p className="clock">{formatTime(time)}</p>
      <div className="app">
        <div>
          <label htmlFor={`${id}-grid-len`}>Grid length</label>
          <input
            id={`${id}-grid-len`}
            type="range"
            value={gridLen}
            onChange={(e) => {
              setGridLen(e.target.value);
            }}
            min={3}
            max={10}
          />
        </div>
        <p>{gridLen}</p>
      </div>
      <Grid gridLen={gridLen} />
      <div className="container-grid-two">
        <GridTwo gridLen={gridLen} />
      </div>
    </>
  );
}

export default App;
