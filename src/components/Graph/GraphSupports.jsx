import React from "react";
import Arrow from "../Arrow/Arrow";
import "./Graph.css";
import LoadLabel from "../LoadLabel";

function GraphSupports({
  trussLength = 12,

  supports = { 0: 45.833333333333336, 24: 154.16666666666666 },

  // supports = [
  //   { position: 1, load: 100, label: "RP1" },
  //   { position: 12, load: 4000, label: "RP2" },
  // ],
}) {
  const supportsArray = Object.entries(supports).map(([position, load]) => ({
    position: parseInt(position),
    load: Math.ceil(load),
  }));

  console.log(supportsArray);

  const renderSupport = (index) => {
    const support = supportsArray.find(
      (support) => parseInt(support.position) === index + 1
    );

    if (support && parseInt(support.position) === index + 1) {
      return (
        <div>
          <div className="flex-center" style={{ marginTop: "10px" }}>
            <Arrow direction="up" />
          </div>
          <LoadLabel data={support} />
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
            {renderSupport(index)}
          </div>
        ))}
    </div>
  );
}

export default GraphSupports;
