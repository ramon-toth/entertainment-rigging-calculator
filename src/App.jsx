import {  useReducer } from "react";
import { UnitsDispatchContext, UnitsProvider } from "./context/unitsContext";
import { unitsReducer } from "./context/unitsReducer";
import { units as initUnits } from "./utils/units";
import "./App.css";
import Layout from "./components/Layout";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {

  const [storedUnits] = useLocalStorage("units");

  const [units, dispatch] = useReducer(
    unitsReducer,
    initUnits[storedUnits] || initUnits.imperial
  );

  return (
    <>
      <UnitsProvider value={units}>
        <UnitsDispatchContext.Provider value={dispatch}>
          <Layout />
        </UnitsDispatchContext.Provider>
      </UnitsProvider>
    </>
  );
}

export default App;
