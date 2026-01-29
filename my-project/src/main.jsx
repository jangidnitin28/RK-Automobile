import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import AllVehicles from "./components/AllVehicles";
import Contact from "./components/Contact";
import ViewDetail from "./components/ViewDetail";
import Customers from "./components/Customers";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/vehicles', element: <AllVehicles /> },
      { path: '/contact', element: <Contact /> },
      { path: '/ViewDetail', element: <ViewDetail /> },
      { path: '/customer', element: <Customers/> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);