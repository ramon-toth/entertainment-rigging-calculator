import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Truss from "./components/Truss/Truss";
import Arrow from "./components/Arrow/Arrow";
import Graph from "./components/Graph/Graph";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Graph />
      {/* <Truss />
      <Arrow direction="up" /> */}
    </>
  );
}

export default App;
