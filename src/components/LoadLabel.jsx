import React from "react";

function LoadLabel({ data }) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "70px",
    },
  };
  return (
    <div style={styles.container}>
      <span>{data.label}</span>
      <span>{data.position} ft</span>
      <span>{data.load} lbs</span>
    </div>
  );
}

export default LoadLabel;
