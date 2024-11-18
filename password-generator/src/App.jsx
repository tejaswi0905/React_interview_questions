import "./App.css";
import { useState } from "react";
import usePasswordGenerator from "./hooks/use-password-generator";

function App() {
  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    {
      title: "Include UpperCase Letters",
      state: false,
    },
    {
      title: "Include LowerCase Letters",
      state: false,
    },
    {
      title: "Include Numbers",
      state: false,
    },
    {
      title: "Include Symbols",
      state: false,
    },
  ]);

  const handleCheckBoxChange = (index) => {
    const updatedBox = [...checkBoxData];
    updatedBox[index].state = !updatedBox[index].state;
    setCheckBoxData(updatedBox);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <div className="app">
      <div className="header">
        <div>
          {password && <div className="password-text">{password}</div>}
          {errorMessage && <div className="error-text">{errorMessage}</div>}
        </div>
        <div className="copy-button">
          <button className="btn">Copy</button>
        </div>
      </div>

      <div className="char-length">
        <span>
          <label htmlFor="">Char Length</label>
          <label htmlFor="">{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </div>

      <div className="check-boxes">
        {checkBoxData.map((box, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={box.state}
                onChange={() => handleCheckBoxChange(index)}
              />

              <span>{box.title}</span>
            </div>
          );
        })}
      </div>
      <div className="createPassword">
        <button
          className="createPassword-btn"
          onClick={() => {
            generatePassword(checkBoxData, length);
          }}
        >
          Create Password
        </button>
      </div>
    </div>
  );
}

export default App;
