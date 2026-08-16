import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route, 
  Link, 
  Outlet 
} from "react-router-dom";

// import the pages
import Dashboard from './pages/Dashboard';  
import Example from './pages/example';
import Home from './pages/Home';


function RootLayout() {
  return (
    <>
      {/* Navigation */}
      {/* Renderuje komponenty zdefiniowane w trasach jako dzieci tego layoutu */}
      < nav className='Navigation' >
        < Link to="/">Home</Link> | {" "}
        < Link to="/dashboard" > Dashboard</Link > | {" "}
        < Link to="/example" > Example</Link >
      </nav >
      <Outlet />  
      
    </>
  )
}

{/* Routes */}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="example" element={<Example />} />
    </Route>
  )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App
