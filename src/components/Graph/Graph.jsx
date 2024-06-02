import React from "react";
import Truss from "../Truss/Truss";
import GraphLoads from "./GraphLoads";
import GraphSupports from "./GraphSupports";
import Udl from "./Udl";

function Graph() {
  return (
    <>
      <GraphLoads />
      <Udl />
      <Truss />
      <GraphSupports />
    </>
  );
}

export default Graph;
