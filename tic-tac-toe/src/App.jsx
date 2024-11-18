import "./App.css";
import BoxesGrid from "./components/BoxesGrid";
import { useState } from "react";

function App() {
  const [inputValue, setInputVlaue] = useState("");
  const [gridValue, setGridValue] = useState(3);
  const [boxes, setBoxes] = useState(Array(gridValue * gridValue).fill(null));

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      setGridValue(value);
      document.documentElement.style.setProperty("--grid-size", value);
      setBoxes(Array(gridValue).fill(null));
    }
  };

  return (
    <div className="main">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputVlaue(e.target.value);
            }}
          />

          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
      <BoxesGrid boxes={boxes} setBoxes={setBoxes} value={gridValue}>
        {" "}
      </BoxesGrid>
    </div>
  );
}

export default App;
