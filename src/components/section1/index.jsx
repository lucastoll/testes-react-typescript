import { Wrapper, Titulo, Link, Numero } from "./styles";
import React, {useState, useEffect} from "react";
import sonica from "../../assets/section1/sonica.png"
import { useToggleDisplayState } from "../../context/useToggleDisplay";


export const Section1 = function () {
  const {display} = useToggleDisplayState();
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
    <>
      {display ?
            <Wrapper>
            <Link id="secao1"></Link>
            <Titulo>States e Props</Titulo>
            <img src={sonica} style={styles.sonicaImg} alt=""></img>
            <Numero num={num} setNum={setNum}/>
          </Wrapper>
      : null}
    </>
  );
};
