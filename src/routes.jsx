import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Job from "./pages/Job/Job";
import Contact from "./pages/Contact/Contact";

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
];

export default routes;
