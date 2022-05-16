import React, { useEffect, useState } from "react";
import imgMobile from "../../assets/section2/mobile.png"
import imgTablet from "../../assets/section2/tablet.png"
import styled from "styled-components";
import { Container, Link, Titulo, Wrapper } from "../section1/styles";


const Espaco = styled.div`
  margin-bottom: 0px;
`

export const Section2 = function () {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  }, [width])

  return (
    <Wrapper style={{backgroundColor: '#6b750e', paddingBottom: "0px"}}>
      <Link id="secao2"></Link>
      <Titulo>UseEffect</Titulo>
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
  );
};
