import React from "react";
import { UnitsProvider } from "../context/unitsContext";
import { units } from "../utils/units";
import Graph from "./Graph/Graph";
import TrussCalcForm from "./TrussCalcForm";
import { useState } from "react";

function TrussCalculator() {
  const initLoad = {
    id: 1,
    position: 1,
    load: 100,
    label: "Load",
  };

  const [formData, setFormData] = useState({
    trussLength: 24,
    numberOfSupports: 2,
    trussWeight: 100,
    udl: 0,
    supports: [{id: 1, position: 2, label: 'RP 1'}, {id: 2, position: 22, label: 'RP 2'}],
    loads: [
      { ...initLoad, id: 1 },
      { ...initLoad, id: 2, position: 10 },
    ],
  });
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSupportLocationChange = (e, index) => {
    e.preventDefault();
    const newSupports = [...formData.supports];
    newSupports[index] = e.target.value;
    setFormData({ ...formData, supports: newSupports });
  };

  // Handlers for Point Loads
  const handleLoadChange = (e, id) => {
    e.preventDefault();

    const load = formData.loads.find((load) => load.id === id);
    const loadIndex = formData.loads.findIndex((load) => load.id === id);

    formData.loads[loadIndex] = {
      ...load,
      [e.target.name]: e.target.value,
    };
    setFormData({ ...formData });
  };

  const handleAddLoad = () => {
    const newLoad = {
      ...initLoad,
      id: formData.loads.length + 1,
      position: Math.floor(Math.random() * formData.trussLength),
    };
    setFormData({ ...formData, loads: [...formData.loads, newLoad] });
  };

  const handleRemoveLoad = (id) => {
    const newLoads = formData.loads.filter((load) => load.id !== id);
    setFormData({ ...formData, loads: newLoads });
  };

  // Handlers for Rigging Points

  const handleSupportChange = (e, id) => {
    e.preventDefault();
    const support = formData.supports.find((support) => support.id === id);
    const supportIndex = formData.supports.findIndex(
      (support) => support.id === id
    );
    formData.supports[supportIndex] = {
      ...support,
      [e.target.name]: e.target.value,
    };
    setFormData({ ...formData });
  }

  const handleAddSupport = () => {
    const newSupport = {
      id: formData.supports.length + 1,
      position: Math.floor(Math.random() * formData.trussLength),
    };
    setFormData({ ...formData, supports: [...formData.supports, newSupport] });
  }

  const handleRemoveSupport = (id) => {
    const newSupports = formData.supports.filter((support) => support.id !== id);
    setFormData({ ...formData, supports: newSupports });
  }

  return (
    <UnitsProvider value={units.imperial}>
      <TrussCalcForm
        handleAddLoad={handleAddLoad}
        formData={formData}
        handleChange={handleChange}
        handleLoadChange={handleLoadChange}
        handleRemoveLoad={handleRemoveLoad}
        handleSupportLocationChange={handleSupportLocationChange}
        handleAddSupport={handleAddSupport}
        handleRemoveSupport={handleRemoveSupport}
        handleSupportChange={handleSupportChange}
        // handleSupportsNumberChange={handleSupportsNumberChange}
      />
      <Graph data={formData} />
    </UnitsProvider>
  );
}

export default TrussCalculator;
