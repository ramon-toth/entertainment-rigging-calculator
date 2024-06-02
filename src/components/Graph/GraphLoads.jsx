import React from "react";
import Arrow from "../Arrow/Arrow";
import "./Graph.css";
import LoadLabel from "../LoadLabel";

function GraphLoads({ trussLength = 12, loads = [] }) {
  const renderLoads = (index) => {
    const load = loads.find((load) => parseInt(load.position) === index + 1);

    if (load && parseInt(load.position) === index + 1) {
      return (
        <div>
          <LoadLabel data={load} />
          <div className="flex-center" style={{ marginTop: "10px" }}>
            <Arrow direction="down" />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="graph-container">
      {Array(trussLength)
        .fill()
        .map((_, index) => (
          <div key={index} className="load">
            {renderLoads(index)}
          </div>
        ))}
    </div>
  );
}

export default GraphLoads;
