import { Wrapper, Titulo, Link, Numero, Container } from "./styles";
import React, {useState} from "react";
import sonica from "../../assets/section1/sonica.png"
import imgSection from "../../assets/section1/section.PNG"
import imgComponenteProps from "../../assets/section1/props.PNG"




export const Section1 = function () {
  const [num, setNum] = useState(0)

  const styles = {
      sonicaImg :{
        transform: `rotate(${num}deg)`,
        width: '18.75rem'
      },
      codigoImg :{
        width: '300px'
      } 
  }

  return (
    <Wrapper>
      <Link id="secao1"></Link>
      <Titulo>States e Props</Titulo>
      <img src={sonica} style={styles.sonicaImg} alt=""></img>
      <Numero num={num} setNum={setNum}/>
      <Container>
        <img src={imgSection} styles={styles.codigoImg} alt=""></img>
        <img src={imgComponenteProps} styles={styles.codigoImg} alt=""></img>
      </Container>
    </Wrapper>
  );
};
