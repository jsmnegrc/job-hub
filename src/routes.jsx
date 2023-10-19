import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Job from "./pages/Job/Job";
import Contact from "./pages/Contact/Contact";
import Login from "./access/login";
import Register from "./access/Register";
import JobDetails from "./pages/Job/JobDetails";

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
    path: "/contact",
    element: <Contact />,
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
    path: "/jobdetails",
    element: <JobDetails />,
  },
];

export default routes;
