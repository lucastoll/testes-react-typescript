import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToggleDisplayProvider } from "./context/useToggleDisplay";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import { Header } from "./components/Header";
import { Hero }  from "./components/Hero";
import { StatesProps } from "./components/UseState&props";
import { UseEffect } from "./components/UseEffect";
import { Formulario } from "./components/Formulario";
import { RenderMap } from "./components/Render.map";
import { TestRouter } from "./components/TestRouter"; 
import { UseContext } from "./components/UseContext"
import { SearchFilter } from "./components/SearchFilter";
import { GlobalStyle } from "./styles/GlobalStyle";


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
