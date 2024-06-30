import React, { useContext, useRef } from "react";
import { UnitsContext } from "../context/unitsContext";
import Graph from "./Graph/Graph";
import TrussCalcForm from "./TrussCalcForm";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { parseIfNumber } from "../utils/utils";
import Actions from "./Actions";
import { toPng } from 'html-to-image';
import { parse } from "postcss";
import { parseUploadedJsonFile } from "../utils/utils";

function TrussCalculator() {
  const initLoad = {
    id: 1,
    position: 1,
    load: 100,
    label: "Load",
  };

  const initSupport = { id: 1, position: 2, label: "RP X" };

  const [savedData, setSavedData] = useLocalStorage("trussData", {
    v: 1,
    trussLength: 24,
    projectName: "My Project",
    numberOfSupports: 2,
    trussWeight: 100,
    udl: 0,
    supports: [
      { id: 1, position: 2, label: "RP 1" },
      { id: 2, position: 22, label: "RP 2" },
    ],
    loads: [
      { ...initLoad, id: 1 },
      { ...initLoad, id: 2, position: 10 },
    ],
  });

  const [formData, setFormData] = useState(savedData);

  const units = useContext(UnitsContext);

  const save = (data) => {
    setSavedData(data);
    setFormData(data);
  };

  const handleChange = (e) => {
    e.preventDefault();
    save({ ...formData, [e.target.name]: parseIfNumber(e.target.value) });
  };

  const handleSupportLocationChange = (e, index) => {
    e.preventDefault();
    const newSupports = [...formData.supports];
    newSupports[index] = parseIfNumber(e.target.value);
    save({ ...formData, supports: newSupports });
  };

  // Handlers for Point Loads
  const handleLoadChange = (e, id) => {
    e.preventDefault();

    const load = formData.loads.find((load) => load.id === id);
    const loadIndex = formData.loads.findIndex((load) => load.id === id);

    formData.loads[loadIndex] = {
      ...load,
      [e.target.name]: parseIfNumber(e.target.value),
    };
    save({ ...formData });
  };

  const handleAddLoad = () => {
    const newLoad = {
      ...initLoad,
      id: formData.loads.length + 1,
      position: Math.floor(Math.random() * formData.trussLength),
    };
    save({ ...formData, loads: [...formData.loads, newLoad] });
  };

  const handleRemoveLoad = (id) => {
    const newLoads = formData.loads.filter((load) => load.id !== id);
    save({ ...formData, loads: newLoads });
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
      [e.target.name]: parseIfNumber(e.target.value),
    };
    save({ ...formData });
  };

  const handleAddSupport = () => {
    const newSupport = {
      ...initSupport,
      id: formData.supports.length + 1,
      position: Math.floor(Math.random() * formData.trussLength),
    };
    save({ ...formData, supports: [...formData.supports, newSupport] });
  };

  const handleRemoveSupport = (id) => {
    const newSupports = formData.supports.filter(
      (support) => support.id !== id
    );
    save({ ...formData, supports: newSupports });
  };

  // Create a ref for the component you want to capture
  const graphRef = useRef(null);

  // Function to capture graph screenshot
  const captureScreenshot = () => {
    toPng(graphRef.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `${formData.projectName}.png`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleImport = async (e) => { 
    
    const importData = await parseUploadedJsonFile(e.target.files[0]) 
    if (importData.v !== 1) {
      alert("Invalid file format")
      return
    } else {
      save(importData)
    }
}

  return (

    <>

      <div ref={graphRef}>
        <Graph data={formData} />
      </div>
      <Actions formData={formData} captureScreenshot={captureScreenshot} handleImport={handleImport} />

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
      />
    </>
  );
}

export default TrussCalculator;
