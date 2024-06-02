import React from "react";
import Truss from "../Truss/Truss";
import GraphLoads from "./GraphLoads";
import GraphSupports from "./GraphSupports";
import Udl from "./Udl";
import Card from "../Card";

function Graph() {
  return (
    <Card>
      <GraphLoads />
      <Udl />
      <Truss />
      <GraphSupports />
    </Card>
  );
}

export default Graph;
