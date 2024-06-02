import React, { useEffect, useRef } from "react";
import "./Truss.css";

function Truss() {
  const apexes = useRef(null);

  const drawTruss = () => {
    const screenWidth = window.innerWidth;
    const numberOfApexes = Math.floor(screenWidth / 83);

    apexes.current.innerHTML = "";

    for (let i = 0; i < numberOfApexes; i++) {
      const div = document.createElement("div");
      div.classList.add("apex");
      if (i % 2 === 1) {
        div.classList.add("apex-up");
      } else {
        div.classList.add("apex-down");
      }
      apexes.current.appendChild(div);
    }
  };

  useEffect(() => {
    drawTruss();
    addEventListener("resize", drawTruss);
    return () => {
      removeEventListener("resize", drawTruss);
    };
  }, []);

  return (
    <div className="truss-container">
      <div className="truss">
        <div className="chord chord-top"></div>
        <div className="apexes" ref={apexes}></div>
        <div className="chord chord-bottom"></div>
      </div>
    </div>
  );
}

export default Truss;
