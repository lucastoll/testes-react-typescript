import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useToggleDisplayState } from "../../context/useToggleDisplay";

const imgMobile = require("../../assets/useEffect/mobile.png");
const imgTablet = require("../../assets/useEffect/tablet.png");
const { Container, Link, Titulo, Wrapper } = require("../UseState&props/styles");

const Espaco = styled.div`
  margin-bottom: 0px;
`
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
      <Wrapper style={{background: '#c70000', paddingBottom: "0px"}}>
        <Link id="secao2"></Link>
        <Titulo data-aos="slide-up">UseEffect</Titulo>
        <h2 data-aos="slide-up" style={{color: "#ffffff", maxWidth: "650px", width: "70%", marginBottom: "20px"}}>Nesse exemplo o hook verifica sempre que a width da tela do usuário muda, mostrando um celular ou um tablet de acordo com a width.</h2>
        <Container data-aos="slide-up">
          {
          width < 768 ? 
          <>
            <img data-aos="" src={imgMobile} alt=""></img>
            <Espaco></Espaco>
          </>
          : 
          <img data-aos="" src={imgTablet} alt=""></img>
          }
        </Container>
      </Wrapper>
      : null}
    </>
  );
};
