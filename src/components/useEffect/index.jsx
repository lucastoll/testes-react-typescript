import React, { useEffect, useState } from "react";
import imgMobile from "../../assets/section2/mobile.png"
import imgTablet from "../../assets/section2/tablet.png"
import styled from "styled-components";
import { Container, Link, Titulo, Wrapper } from "../useState&props/styles";
import { useToggleDisplayState } from "../../context/useToggleDisplay";


const Espaco = styled.div`
  margin-bottom: 0px;
`

export const Section2 = function () {
  const {display} = useToggleDisplayState();
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  }, [width])

  return (
    <>
      { display ? 
      <Wrapper style={{background: '#c70000', paddingBottom: "0px"}}>
        <Link id="secao2"></Link>
        <Titulo>UseEffect</Titulo>
        <h2 style={{color: "#ffffff", maxWidth: "650px", width: "70%", marginBottom: "20px"}}>Nesse exemplo o hook verifica sempre que a width da tela do usuário muda, mostrando um celular ou um tablet de acordo com a width.</h2>
        <Container>
          {
          width < 768 ? 
          <>
            <img src={imgMobile} alt=""></img>
            <Espaco></Espaco>
          </>
          : 
          <img src={imgTablet} alt=""></img>
          }
        </Container>
      </Wrapper>
      : null}
    </>
  );
};
