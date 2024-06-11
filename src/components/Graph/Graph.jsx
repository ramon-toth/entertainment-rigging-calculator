import React from "react";
import Truss from "../Truss/Truss";
import GraphLoads from "./GraphLoads";
import GraphSupports from "./GraphSupports";
import Udl from "./Udl";
import Card from "../Card";
import GraphCalculate from "./GraphCalculate";

function Graph({ data }) {
  const { trussLength, loads, supports, udl, trussWeight } = data;

  const totalUdl = parseInt(udl) + parseInt(trussWeight);

  return (
    <Card>
      <GraphLoads loads={loads} trussLength={trussLength} />
      <Udl trussLength={trussLength} udl={totalUdl} />
      <Truss trussLength={trussLength} />
      <GraphCalculate data={data} />
    </Card>
  );
}

export default Graph;
