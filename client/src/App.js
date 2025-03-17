import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import SafeHouse from "./components/Jwt-safehouse";
function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/jwt-safehouse",
      element: <SafeHouse />,
    },
    { path: "*", element: <Home /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
