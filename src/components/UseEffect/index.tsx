import React, { useEffect, useState } from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import { NewContainer, NewWrapper } from "./styles";
import imgMobile from "../../assets/useEffect/mobile.png";
import imgTablet from "../../assets/useEffect/tablet.png";
import { Link, Titulo } from "../UseState&props/styles";

export const UseEffect = function () {
  const {display} = useToggleDisplayState();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  }, [width])

  return (
    <>
      { display ? 
      <NewWrapper>
        <Link id="secao2"></Link>
        <Titulo data-aos="slide-up">UseEffect</Titulo>
        <h2 data-aos="slide-up" style={{color: "#ffffff", maxWidth: "650px", width: "70%", marginBottom: "20px"}}>Nesse exemplo o hook verifica sempre que a width da tela do usuário muda, mostrando um celular ou um tablet de acordo com a width.</h2>
        <NewContainer data-aos="slide-up">
          {
          width < 768 ? 
          <>
            <img data-aos="" src={imgMobile} alt=""></img>
          </>
          : 
          <img data-aos="" src={imgTablet} alt=""></img>
          }
        </NewContainer>
      </NewWrapper>
      : null}
    </>
  );
};
