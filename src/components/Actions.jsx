import React from "react";
import Card from "./Card";
import { downloadObjectAsJson, removeLocalStorageItem } from "../utils/utils";

function Actions({ formData, captureScreenshot, handleImport }) {
  // const handleExport = () => {}

  const handleClear = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to clear the Project?"
    );

    if (isConfirmed) {
      window.location.reload();
      removeLocalStorageItem("trussData");
    }
  };
  return (
    <Card>
      <div className="flex justify-center">

        <button
          type="button"
          onClick={() => downloadObjectAsJson(formData, "trussData")}
          className="rounded mx-6 bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
        >
          Export Project
        </button>

        <input
          type="file"
          name="import"
          id="import"
          accept=".json"
          onChange={handleImport}
          className="hidden"
        ></input>
        <label
          htmlFor="import"
          className="rounded mx-6 bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
        >
          Import Project
        </label>

        <button
          type="button"
          onClick={captureScreenshot}
          className="rounded mx-6 bg-green-50 px-2 py-1 text-xs font-semibold text-green-600 shadow-sm hover:bg-indigo-100"
        >
          Download
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="rounded mx-6 bg-red-50 px-2 py-1 text-xs font-semibold text-red-600 shadow-sm hover:bg-indigo-100"
        >
          Clear
        </button>
      </div>
    </Card>
  );
}

export default Actions;
