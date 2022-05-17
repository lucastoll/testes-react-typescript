import { Wrapper, DivLogo, WrapperLinks } from "./styles";
import Logo from "../../assets/header/Sega-Logo.png";
import React from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";

export const Header = function () {
  const {display} = useToggleDisplayState();
  return (
    <>
      {display ? 
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
            <a href="#secao4">Renderização com .map</a>
          </li>
          <li>
            <a href="#secao5">Use Context</a>
          </li>
        </WrapperLinks>
      </Wrapper>
     : null}
    </>
  );
};
