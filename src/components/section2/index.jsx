import React, { useEffect, useState } from "react";
import imgMobile from "../../assets/section2/mobile.png"
import imgTablet from "../../assets/section2/tablet.png"
import styled from "styled-components";



export const Section2 = function () {

  const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #6b750e;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-bottom: 50px;
`;

const Titulo = styled.h1`
  color: white;
  font-size: 36px;
  margin-top: 20px;
`;

const Link = styled.div`
  position: absolute;
  top: -100px;
`;


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 40vw;
`

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  }, [width])

  return (
    <Wrapper>
      <Link id="secao2"></Link>
      <Titulo>Seção 2 - UseEffect</Titulo>
      <Container>
        {
        width < 768 ? 
        <img src={imgMobile} alt=""></img>
        : 
        <img src={imgTablet} alt=""></img>
        }
      </Container>
    </Wrapper>
  );
};
