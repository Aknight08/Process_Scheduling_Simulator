import React from "react";

const GanntChart = ({ processes, completionTimes, turnaroundTimes }) => {
  return (
    <div style={{ position: "relative", height: "100px" }}>
      {processes.map((process, index) => (
        <div
          key={process.id}
          style={{
            position: "absolute",
            left: `${(completionTimes[index] /
              completionTimes[completionTimes.length - 1]) *
              100}%`,
            width: "50px",
            height: "20px",
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bottom: 0,
          }}
        >
          {process.name}
        </div>
      ))}
      {processes.map((process, index) => (
        <div
          key={process.id}
          style={{
            position: "absolute",
            pointerEvents: "none",
            fontSize: "0.8em",
            left: `${(completionTimes[index] /
              completionTimes[completionTimes.length - 1]) *
              100}%`,
            bottom: 0,
          }}
        >
          {index === 0 ? (
            <div>{completionTimes[index]}</div>
          ) : (
            <div>
              {completionTimes[index] - completionTimes[index - 1]}
            </div>
          )}
        </div>
      ))}
      {processes.map((process, index) => (
        <div
          key={process.id}
          style={{
            position: "absolute",
            height: "20px",
            backgroundColor: "blue",
            left: `${(completionTimes[index] /
              completionTimes[completionTimes.length - 1]) *
              100}%`,
            width: `${(turnaroundTimes[index] /
              completionTimes[completionTimes.length - 1]) *
              100}%`,
            bottom: 0,
          }}
        />
      ))}
    </div>
  );
};

export default GanntChart;