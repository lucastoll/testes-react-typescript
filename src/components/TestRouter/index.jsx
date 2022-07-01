import React from 'react'
import { Button } from '../Button';
import { Container, Link, Titulo, Wrapper } from "../UseState&props/styles";
import { Link as LinkRouter } from 'react-router-dom';
import { useToggleDisplayState } from '../../context/useToggleDisplay';


export function TestRouter() {
  const {display} = useToggleDisplayState();

  return (
    <>
      {display ?      
        <Wrapper style={{background: '#2991e6'}}>
          <Link id="secao5"></Link>
          <Titulo data-aos="slide-up">Router</Titulo>
          <h2 data-aos="slide-up" style={{color: "#ffffff", maxWidth: "650px", width: "70%", marginBottom: "20px"}}>
              Troca de páginas dentro do conceito de SPA com a biblioteca react-router.
          </h2>
          <Container data-aos="slide-up">
              <LinkRouter to="/sonicesperando">
                  <Button style={{backgroundColor: "#2991e6"}}>Trocar página</Button>     
              </LinkRouter>
          </Container>
        </Wrapper>
      : null}    
    </>
  )
}
