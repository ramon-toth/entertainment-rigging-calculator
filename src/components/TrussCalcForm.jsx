import React, { useContext } from "react";
import Card from "./Card";
import Input from "./Input";
import { useState } from "react";
import { UnitsContext } from "../context/unitsContext";
import Divider from "./Divider";
import PointLoadForm from "./PointLoadForm";

function TrussCalcForm({
  handleChange,
  handleAddLoad,
  handleRemoveLoad,
  handleLoadChange,
  handleSupportLocationChange,
  formData,
}) {
  const units = useContext(UnitsContext);

  return (
    <Card>
      <div className="flex justify-center">
        <div className="w-full mx-5">
          <Divider title="Truss" />
          <Input
            name={"trussLength"}
            label="Truss Length"
            value={formData.trussLength}
            unit={units.length}
            onChange={handleChange}
          />
          <Input
            label="Truss Weight"
            name={"trussWeight"}
            value={formData.trussWeight}
            onChange={handleChange}
            unit={units.force}
          />
          <Divider title="Supports" />
          <Input
            label="Number of Supports"
            name={"numberOfSupports"}
            value={formData.numberOfSupports}
            onChange={handleChange}
          />
          {Array.from({ length: formData.numberOfSupports }, (_, index) => (
            <div key={index} className="mb-3">
              <Input
                name={`support-${index}`}
                onChange={(e) => handleSupportLocationChange(e, index)}
                label={`RP ${index + 1} Location`}
                unit={units.length}
              />
            </div>
          ))}
        </div>
        <div className="w-full mx-5">
          <Divider title="Loads" />
          <Input
            name="udl"
            onChange={handleChange}
            label="UDL Load"
            unit={units.force}
          />
          <PointLoadForm
            loads={formData.loads}
            handleChange={handleLoadChange}
            handleAddLoad={handleAddLoad}
            handleRemoveLoad={handleRemoveLoad}
          />
        </div>
      </div>
    </Card>
  );
}

export default TrussCalcForm;
