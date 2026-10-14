import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

// import the pages
import WelcomePage from './pages/WelcomePage';
import Dashboard from './pages/Dashboard';
import Example from './pages/example';
import Home from './pages/Home';
import RootLayout from './components/RootLayout';
import RequireRegistration from './components/RequireRegistration';


// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/welcome" element={<WelcomePage />} />

      <Route path="/" element={
        <RequireRegistration>
          <RootLayout />
        </RequireRegistration>
      }>

        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="example" element={<Example />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
