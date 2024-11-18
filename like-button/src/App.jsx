import "./App.css";
import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";

function App() {
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = async () => {
    setIsFetching(true);
    setError(null);

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: isLiked ? "unlike" : "like",
          }),
        }
      );
      if (response.status >= 200 && response.status < 300) {
        setIsLiked((curVal) => {
          return !curVal;
        });
      } else {
        const errorMessage = await response.json();
        setError(errorMessage.message);
      }
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <div className="app">
      <button
        className={`like ${isLiked ? "liked" : ""}`}
        onClick={handleClick}
      >
        <div className="contents">
          <div className="icon">
            {isFetching ? <SpinnerIcon /> : <HeartIcon />}
          </div>
          <div className="text">{isLiked ? "Liked" : "Like"}</div>
        </div>
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;
