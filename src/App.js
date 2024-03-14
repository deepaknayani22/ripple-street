import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProductsPage from "./components/pages/ProductsPage";
import Header from "./components/General/Header/Header";

import sidebarData from "./components/General/SideNav/SidebarData";
import { EventsProvider } from "./contexts/EventContext";

const router = createBrowserRouter(sidebarData);

function App() {
  return (
    <EventsProvider>
      {/* <RouterProvider router={router} />; */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Navigate replace to="/events" />} />
          <Route path="/events" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </EventsProvider>
  );
}

export default App;
