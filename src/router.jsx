import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import TrussCalculator from "./components/TrussCalculator.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import BridleCalculator from "./pages/BridleCalculator.jsx";
import Help from "./pages/Help.jsx";
import Donate from "./pages/Donate.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <TrussCalculator /> },
      { path: "/truss", element: <TrussCalculator /> },
      { path: "/bridle", element: <BridleCalculator /> },
      { path: "/help", element: <Help /> },
      { path: "/donate", element: <Donate /> },
    ],
  },
]);
