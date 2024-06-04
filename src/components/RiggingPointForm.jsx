import Divider from "./Divider";
import Input from "./Input";
import { useContext } from "react";
import { UnitsContext } from "../context/unitsContext";

function RiggingPointForm({
  supports,
  handleChange,
  handleAddSupport,
  handleRemoveSupport,
}) {
  const units = useContext(UnitsContext);
  return (
    <div className="mt-3">
      {supports.map((support, index) => (
        <div key={index}>
          <Divider title={`Rigging Point ${index + 1}`} />
          <Input
            label="Label"
            name="label"
            value={support.label}
            onChange={(e) => handleChange(e, support.id)}
          />
          {/* <Input
            label="Weight"
            unit={units.force}
            name="support"
            value={support.load}
            onChange={(e) => handleChange(e, support.id)}
          /> */}
          <Input
            label="Position"
            unit={units.length}
            name="position"
            value={support.position}
            onChange={(e) => handleChange(e, support.id)}
          />
          <div className="flex justify-center">
            <button
              type="button"
              className="rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 mx-5"
              onClick={handleAddSupport}
            >
              Add Rigging Point
            </button>
            <button
              type="button"
              className="rounded bg-red-50 px-2 py-1 text-xs font-semibold text-red-600 shadow-sm hover:bg-indigo-100 mx-5"
              onClick={() => handleRemoveSupport(support.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RiggingPointForm;
