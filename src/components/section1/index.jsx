import { Wrapper, Titulo, Link, Numero, Container } from "./styles";
import React, {useState, useEffect} from "react";
import sonica from "../../assets/section1/sonica.png"
import imgSection from "../../assets/section1/section.PNG"
import imgComponenteProps from "../../assets/section1/props.PNG"




export const Section1 = function () {
  const [num, setNum] = useState(0);
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
      console.log(width)
    })
  }, [width])

  const styles = {
      sonicaImg :{
        transform: `rotate(${num}deg)`,
        width: '18.75rem'
      },
      codigoImg :{
        width: '100vw'
      } 
  }
  

  return (
    <Wrapper>
      <Link id="secao1"></Link>
      <Titulo>States e Props</Titulo>
      <img src={sonica} style={styles.sonicaImg} alt=""></img>
      <Numero num={num} setNum={setNum}/>
      {width > 768 && 
      <Container>
        <img src={imgSection} alt=""></img>
        <img src={imgComponenteProps} alt=""></img>
      </Container>
      }
    </Wrapper>
  );
};
