import React from "react";
import Card from "./Card";
import {downloadObjectAsJson} from "../utils/utils";

function Actions({formData, captureScreenshot}) {

    // const handleExport = () => {}
  return (

    <Card>
      <div className="flex justify-center">
        <button
          type="button"
          className="rounded mx-6 bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
        >
          Import
        </button>
        <button
          type="button"
          onClick={()=> downloadObjectAsJson(formData, "trussData")}
          className="rounded mx-6 bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
        >
          Export
        </button>
        <button
          type="button"
          onClick={captureScreenshot}
          className="rounded mx-6 bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
        >
          Download
        </button>
      </div>
    </Card>
  );
}

export default Actions;
