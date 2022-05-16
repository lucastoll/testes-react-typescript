import { Wrapper, DivLogo, WrapperLinks } from "./styles";
import Logo from "../../assets/header/Sega-Logo.png";
import React from "react";


export const Header = function () {
  return (
    <Wrapper>
      <DivLogo>
        <a href="#home">
          <img src={Logo} alt="" />
        </a>
      </DivLogo>
      <WrapperLinks>
        <li>
          <a href="#secao1">States e Props</a>
        </li>
        <li>
          <a href="#secao2">UseEffect</a>
        </li>
        <li>
          <a href="#secao3">Formulário</a>
        </li>
        <li>
          <a href="#secao5">Renderização com .map</a>
        </li>
      </WrapperLinks>
    </Wrapper>
  );
};
