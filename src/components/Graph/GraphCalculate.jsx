import React from "react";
import { calculateSupportLoads } from "../../utils/beamMath";
import GraphSupports from "./GraphSupports";

function GraphCalculate({ data }) {
  const { trussLength, loads, supports, udl, trussWeight } = data;

  const pointLoads = loads.map((load) => ({
    position: load.position,
    weight: load.load,
  }));

  const totalUdl =
    (parseInt(udl) + parseInt(trussWeight));

  const supportLoads = calculateSupportLoads(
    parseInt(trussLength),
    supports,
    pointLoads,
    totalUdl
  );

  return <GraphSupports trussLength={trussLength} supports={supportLoads} />;
}

export default GraphCalculate;
