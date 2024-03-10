import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import sidebarData from "./components/General/SideNav/SidebarData";
import { EventsProvider } from "./contexts/EventContext";

const router = createBrowserRouter(sidebarData);

function App() {
  return (
    <EventsProvider>
      <RouterProvider router={router} />;
    </EventsProvider>
  );
}

export default App;
