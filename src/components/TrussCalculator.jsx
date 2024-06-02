import React from "react";
import { UnitsProvider } from "../context/unitsContext";
import { units } from "../utils/units";
import Graph from "./Graph/Graph";

function TrussCalculator() {
  return (
    <UnitsProvider value={units.imperial}>
      <Graph />
    </UnitsProvider>
  );
}

export default TrussCalculator;
