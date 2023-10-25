import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Job from "./pages/Job/Job";
import Login from "./access/login";
import Register from "./access/Register";
import Apply from "./pages/Apply/Apply";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/job",
    element: <Job />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/apply",
    element: <Apply />,
  },
];

export default routes;
