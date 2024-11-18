import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [inputTags, setInputTags] = useState([
    {
      id: 1,
      placehoderText: "input-tag-1",
    },
    {
      id: 2,
      placehoderText: "input-tag-2",
    },
    {
      id: 3,
      placehoderText: "input-tag-3",
    },
    {
      id: 4,
      placehoderText: "input-tag-4",
    },
    {
      id: 5,
      placehoderText: "input-tag-5",
    },
  ]);

  const [selected, setSelected] = useState(1);

  const inputRefs = useRef({});
  const [isSelecting, setIsSelecting] = useState(false);

  useEffect(() => {
    if (inputRefs.current[selected]) {
      inputRefs.current[selected].focus();
    }
  }, [selected]);

  useEffect(() => {
    console.log(
      "For every re-render, that is why I am not giving any dependecny array."
    );
  });

  return (
    <div className="app">
      <div className="all-inputs flow-content">
        {inputTags.map((tagData) => {
          return (
            <div key={tagData.id} className="">
              <input
                placeholder={tagData.placehoderText}
                ref={(el) => {
                  if (!inputRefs.current[tagData.id]) {
                    inputRefs.current[tagData.id] = el;
                  }
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="selector">
        <label htmlFor="number-selection">select input box number</label>
        <select
          id="number-selection"
          value={selected}
          onFocus={() => {
            setIsSelecting(true);
          }}
          onBlur={() => {
            setIsSelecting(false);
          }}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          {inputTags.map((tagData) => {
            return (
              <option key={tagData.id} value={tagData.id}>
                {tagData.id}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default App;
