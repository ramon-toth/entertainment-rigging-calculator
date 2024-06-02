import React, { useContext } from "react";
import { UnitsContext } from "../context/unitsContext";

function LoadLabel({ data }) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "70px",
    },
  };

  const units = useContext(UnitsContext);
  return (
    <div style={styles.container}>
      <span>{data.label}</span>
      <span>
        {data.position} {units.length}
      </span>
      <span>
        {data.load} {units.force}
      </span>
    </div>
  );
}

export default LoadLabel;
