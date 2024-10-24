import logo from "./logo.svg";
import "./App.css";
import { Home } from "./component/Home/Home";
import { Dashboard } from "./component/Dashboard/Dashboard";
import { NavPublic } from "./component/NavPublic/NavPublic";
import { RouterProvider } from "react-router-dom";
import { Router } from "./component/Router/Router";
function App() {
  return (
    <>
      <RouterProvider router={Router}>
        <NavPublic />
      </RouterProvider>
    </>
  );
}

export default App;
