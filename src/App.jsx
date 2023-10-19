import React from "react";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import { Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Flex minH="100vh" flexDirection="column">
        <Header />
        <main>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                  exact
                />
              );
            })}
          </Routes>
        </main>
        <Footer />
      </Flex>
    </>
  );
};

export default App;
