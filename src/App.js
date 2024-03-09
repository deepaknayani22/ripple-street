import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import sidebarData from "./components/General/SideNav/SidebarData";

const router = createBrowserRouter(sidebarData);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
