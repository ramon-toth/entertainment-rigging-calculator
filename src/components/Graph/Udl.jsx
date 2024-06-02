function Udl({ trussLength = 12, udl = 100, color = "orange" }) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "50px",
      marginTop: "10px",
    },
    arrowContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
    },
    line: {
      width: "100%",
      height: "5px",
      backgroundColor: color,
    },
    arrow: {
      width: "0",
      height: "0",
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
      borderBottom: `15px solid ${color}`,
      rotate: "180deg",
      marginTop: "2px",
    },
  };

  const screenWidth = window.innerWidth;
  const numberOfArrow = Math.floor(screenWidth / 30);

  return (
    <div style={styles.container}>
      <div> Uniformly Distributed Load: {udl} lbs</div>
      <div style={styles.line}></div>
      <div style={styles.arrowContainer}>
        {Array.from({ length: numberOfArrow }).map((_, index) => (
          <div key={index} style={styles.arrow}></div>
        ))}
      </div>
    </div>
  );
}

export default Udl;
