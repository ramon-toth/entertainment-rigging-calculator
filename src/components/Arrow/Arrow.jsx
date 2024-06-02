import React from "react";
import "./Arrow.css";

function Arrow({ color = "blue", direction = "up" }) {
  if (direction === "down") {
    return (
      <div className="arrow">
        <div className="line" style={{ background: color }}></div>
        <div
          className="point down"
          style={{ borderLeft: `40px solid ${color}` }}
        ></div>
      </div>
    );
  }
  if (direction === "up") {
    return (
      <div className="arrow">
        <div
          className="point up"
          style={{ borderLeft: `40px solid ${color}` }}
        ></div>
        <div className="line" style={{ background: color }}></div>
      </div>
    );
  }
}

export default Arrow;
