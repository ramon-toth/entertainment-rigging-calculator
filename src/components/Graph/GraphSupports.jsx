import React from "react";
import Arrow from "../Arrow/Arrow";
import "./Graph.css";
import LoadLabel from "../LoadLabel";

function GraphSupports({
  trussLength,
  supports
}) {

  //Deprecated

  // const supportsArray = Object.entries(supports).map(([position, load]) => ({
  //   position: parseInt(position),
  //   load: Math.ceil(load),
  // }));


  const renderSupport = (index) => {
    const support = supports.find(
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
