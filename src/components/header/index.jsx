import { Wrapper, DivLogo, WrapperLinks } from "./styles";
import React, { useState } from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";

export const Header = function () {
  const {display} = useToggleDisplayState();
  const [mobileWrapperLinks, setMobileWrapperLinks] = useState(false);

  function handleMenu() {
    setMobileWrapperLinks(!mobileWrapperLinks);
  }

  return (
    <>
      {display ? 
        <Wrapper mobileWrapperLinks={mobileWrapperLinks}>
        <DivLogo>
          <a href="#home">
            <img className="logo" src={"https://www.sonicthehedgehog.com/wp-content/uploads/2021/08/logo-1.png"} alt="" />
          </a>
          <img 
          onClick={() => (handleMenu())}
          className="hamburguer" 
          src={"https://www.sonicthehedgehog.com/wp-content/uploads/2021/08/hamburger.png"} 
          alt="" 
          />
        </DivLogo>
        <WrapperLinks mobileWrapperLinks={mobileWrapperLinks}>
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
