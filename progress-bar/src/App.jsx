import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";
import ProgressBarPage from "./components/ProgressBarPage";

function App() {
  const [value, setValue] = useState(33);
  const [stopValue, setStopValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((val) => {
        if (val < stopValue) {
          return val + 0.1;
        } else {
          clearInterval(interval);
          return val;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div>
        <ProgressBar value={value} stopValue={stopValue} />
      </div>
      <div>
        <ProgressBarPage />
      </div>
    </div>
  );
}

export default App;
