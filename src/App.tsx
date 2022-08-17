import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToggleDisplayProvider } from "./context/useToggleDisplay";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const { Header } = require("./components/Header");
const { Hero } = require("./components/Hero");
const { StatesProps } = require("./components/UseState&props");
const { UseEffect } = require("./components/UseEffect");
const { Formulario } = require("./components/Formulario");
const { RenderMap } = require("./components/Render.map");
const { TestRouter } = require("./components/TestRouter");
const { UseContext } = require("./components/UseContext");
const { SearchFilter } = require("./components/SearchFilter");
const { GlobalStyle } = require("./styles/GlobalStyle");


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <>
      <ToggleDisplayProvider>
        <Header />
        <Hero />
        <StatesProps />
        <UseEffect />
        <Formulario />
        <RenderMap />
        <TestRouter />
        <SearchFilter />
        <UseContext />
        <Outlet />
      </ToggleDisplayProvider>
      <GlobalStyle />
    </>
  );
}
