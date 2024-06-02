import React from "react";
import { calculateSupportLoads } from "../../utils/beamMath";
import { parse } from "postcss";
import GraphSupports from "./GraphSupports";

function GraphCalculate({ data }) {
  const { trussLength, loads, supports, udl, trussWeight } = data;

  const pointLoads = loads.map((load) => ({
    position: load.position,
    weight: load.load,
  }));

  const totalUdl =
    (parseInt(udl) + parseInt(trussWeight)) / parseInt(trussLength);

  const supportLoads = calculateSupportLoads(
    parseInt(trussLength),
    supports,
    pointLoads,
    totalUdl
  );

  console.log(supportLoads);

  return <GraphSupports trussLength={trussLength} supports={supportLoads} />;
}

export default GraphCalculate;
