import "./App.css";
import { useState } from "react";

function App() {
  const [val, setVal] = useState(1);

  const handleClick = () => {
    setVal((prev) => {
      const newVal = prev + 1;
      if (newVal === 5) {
        setValToZero();
      }

      return newVal;
    });
  };

  const setValToZero = () => {
    setTimeout(() => {
      setVal((prev) => {
        console.log(prev);
        return 0;
      });
    }, 1000);
  };

  return (
    <div className="app">
      <div>{val}</div>
      <button onClick={handleClick}>Increase Val</button>
    </div>
  );
}

export default App;
