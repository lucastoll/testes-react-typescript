import React, {useState, useEffect} from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import 'aos/dist/aos.css'; // You can also use <link> for styles

const { Wrapper, Titulo, Link, Numero } = require("./styles");
const sonica = require("../../assets/states&props/sonica.png");

export const StatesProps = function () {
  const {display} = useToggleDisplayState();
  const [num, setNum] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
  }, [width])

  const styles = { /* Exemplo styles em objeto.  */
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
            <Titulo data-aos="fade">States e Props</Titulo>
            <img data-aos="fade" src={sonica} style={styles.sonicaImg} alt=""></img>
            <Numero data-aos="fade" num={num} setNum={setNum}/>
          </Wrapper>
      : null}
    </>
  );
};
