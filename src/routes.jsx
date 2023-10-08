import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Book from "./pages/Book/Book";
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
    path: "/book",
    element: <Book />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
