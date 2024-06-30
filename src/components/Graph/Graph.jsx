import React from "react";
import Truss from "../Truss/Truss";
import GraphLoads from "./GraphLoads";
import Udl from "./Udl";
import Card from "../Card";
import GraphCalculate from "./GraphCalculate";

function Graph({ data }) {
  const { trussLength, loads, supports, udl, trussWeight, projectName } = data;

  const totalUdl = parseInt(udl) + parseInt(trussWeight);

  const header = (
    <span className="block text-lg font-medium leading-6 text-gray-900 ">
      {projectName}
    </span>
  );

  return (
    <Card header={header}>
      <GraphLoads loads={loads} trussLength={trussLength} />
      <Udl trussLength={trussLength} udl={totalUdl} />
      <Truss trussLength={trussLength} />
      <GraphCalculate data={data} />
    </Card>
  );
}

export default Graph;
