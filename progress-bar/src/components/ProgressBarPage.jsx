import { useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarPage = () => {
  const [stopVal, setStopVal] = useState(0);
  const [val, setVal] = useState(0);

  const handleStopValChange = (e) => {
    setStopVal(e.target.value);
  };

  const increaseVal = () => {
    console.log("inside increaseVal");
    const interval = setInterval(() => {
      setVal((prev) => {
        if (prev < stopVal) {
          return prev + 0.1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 20);
  };

  const handleStartProgress = () => {
    increaseVal();
  };
  return (
    <div className="progress-page">
      <ProgressBar value={val} />
      <input type="number" value={stopVal} onChange={handleStopValChange} />
      <button onClick={handleStartProgress}>Start Progress</button>
    </div>
  );
};

export default ProgressBarPage;
