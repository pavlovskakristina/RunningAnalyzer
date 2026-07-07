import './App.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// ROutes
import Dashboard, { DashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: DashboardLoader,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },

  {
    path: "*",
    element: <Error />,  // It shows an Error page if the route is not found (errorElement)
  },
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
