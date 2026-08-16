import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";

// import the pages
import WelcomePage from './pages/WelcomePage';
import Dashboard from './pages/Dashboard';
import Example from './pages/example';
import Home from './pages/Home';


function RootLayout() {
  const userName = localStorage.getItem("userName") || "";

  return (
    <>
      {/* Navigation */}
      {/* Renderuje komponenty zdefiniowane w trasach jako dzieci tego layoutu */}
      < nav className='Navigation' style={{ display: 'flex', gap: '15px', padding: '10px', borderBottom: '1px solid black' }}>
        <div>
          < Link to="/">Home</Link> | {" "}
          < Link to="/dashboard" > Dashboard</Link > | {" "}
          < Link to="/example" > Example</Link >
        </div>

        <div style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
          Hello, {userName}!
        </div>

      </nav >
      <Outlet />

    </>
  )
}


// PROCES REJESTRACJI (LocalStorage)
function RequireRegistration({ children }) {
  const CompletedSetup = localStorage.getItem("CompletedSetup");

  if (!CompletedSetup) {
    // Jeśli użytkownik nie ma wpisu w localStorage, przekieruj go na stronę powitalną
    return <Navigate to="/welcome" replace />;
  }

  // Użytkownik ma wpis w localStorage
  return children;
}


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
