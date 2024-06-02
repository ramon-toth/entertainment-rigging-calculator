import Divider from "./Divider";
import Input from "./Input";
import { useContext } from "react";
import { UnitsContext } from "../context/unitsContext";

function PointLoadForm({
  loads,
  handleChange,
  handleAddLoad,
  handleRemoveLoad,
}) {
  const units = useContext(UnitsContext);
  return (
    <div className="mt-3">
      {loads.map((load, index) => (
        <div key={index}>
          <Divider title={`Point Load ${index + 1}`} />
          <Input
            label="Label"
            name="label"
            value={load.label}
            onChange={(e) => handleChange(e, load.id)}
          />
          <Input
            label="Weight"
            unit={units.force}
            name="load"
            value={load.load}
            onChange={(e) => handleChange(e, load.id)}
          />
          <Input
            label="Position"
            unit={units.length}
            name="position"
            value={load.position}
            onChange={(e) => handleChange(e, load.id)}
          />
          <div className="flex justify-center">
            <button
              type="button"
              className="rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 mx-5"
              onClick={handleAddLoad}
            >
              Add Load
            </button>
            <button
              type="button"
              className="rounded bg-red-50 px-2 py-1 text-xs font-semibold text-red-600 shadow-sm hover:bg-indigo-100 mx-5"
              onClick={() => handleRemoveLoad(load.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PointLoadForm;
