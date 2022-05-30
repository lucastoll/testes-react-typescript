import { Hero } from "./components/Hero";
import { GlobalStyle } from "./styles/GlobalStyle";
import { StatesProps } from "./components/UseState&props";
import { UseEffect } from "./components/UseEffect";
import { Formulario } from "./components/Formulario";
import { RenderMap } from "./components/Render.map";
import { UseContext } from "./components/UseContext";
import { ToggleDisplayProvider } from "./context/useToggleDisplay";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 200,
    });
  }, [])
  
  return (
    <>
        <Hero />
        <StatesProps></StatesProps>
        <UseEffect></UseEffect>
        <Formulario></Formulario>
        <RenderMap></RenderMap>
        <UseContext></UseContext>
    </>
  );
}
