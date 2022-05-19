import { Header } from "./components/header";
import { Home } from "./components/hero";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Section1 } from "./components/useState&props";
import { Section2 } from "./components/useEffect";
import { Section3 } from "./components/formulario";
import { Section4 } from "./components/render.map";
import { Section5 } from "./components/useContext";
import { ToggleDisplayProvider } from "./context/useToggleDisplay";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ToggleDisplayProvider>
        <Header />
        <Home />
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
      </ToggleDisplayProvider>
    </>
  );
}
