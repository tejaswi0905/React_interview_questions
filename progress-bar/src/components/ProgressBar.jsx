/* eslint-disable react/prop-types */

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
      <div
        className="green-fill"
        style={{
          width: `${value}%`,
        }}
      ></div>

      <div
        className="progress-text"
        style={{
          color: value > 52 ? "white" : "black",
        }}
      >
        {value.toFixed(0)}%
      </div>
    </div>
  );
};

export default ProgressBar;
