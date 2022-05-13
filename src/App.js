import { Header } from "./components/header";
import { Home } from "./components/home";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Section1 } from "./components/section1";
import { Section2 } from "./components/section2";
import { Section3 } from "./components/section3";
import { Section4 } from "./components/section4";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </>
  );
}
