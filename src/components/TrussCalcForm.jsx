import React, { useContext } from "react";
import Card from "./Card";
import Input from "./Input";
import { UnitsContext } from "../context/unitsContext";
import Divider from "./Divider";
import PointLoadForm from "./PointLoadForm";
import RiggingPointForm from "./RiggingPointForm";

function TrussCalcForm({
  handleChange,
  handleAddLoad,
  handleRemoveLoad,
  // handleSupportsNumberChange,
  handleLoadChange,
  handleSupportLocationChange,
handleAddSupport,
handleRemoveSupport,
 handleSupportChange,

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
          {/* <Divider title="Supports" />eeeeee */}
          <RiggingPointForm supports={formData.supports}
                  handleAddSupport={handleAddSupport}
                  handleRemoveSupport={handleRemoveSupport}
                  handleChange={handleSupportChange}
          />
        </div>
        <div className="w-full mx-5">
          <Divider title="Loads" />
          <Input
            name="udl"
            value={formData.udl}
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
