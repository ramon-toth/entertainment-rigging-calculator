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
      <span className="block text-sm font-medium leading-6 text-gray-900 ">{data.label}</span>
      <span className="block text-sm leading-6 text-gray-900 ">
        {data.position} {units.length}
      </span>
      <span className="block text-sm font-medium leading-6 text-gray-900 ">
        {data.load} {units.force}
      </span>
    </div>
  );
}

export default LoadLabel;
