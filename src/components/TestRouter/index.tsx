import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import { useToggleDisplayState } from '../../context/useToggleDisplay';
import { NewButton, NewWrapper } from './styles';

const { Container, Link, Titulo } =  require("../UseState&props/styles");


export function TestRouter() {
  const {display} = useToggleDisplayState();

  return (
    <>
      {display ?      
        <NewWrapper style={{background: '#2991e6'}}>
          <Link id="secao5"></Link>
          <Titulo data-aos="slide-up">Router</Titulo>
          <h2 data-aos="slide-up" style={{color: "#ffffff", maxWidth: "650px", width: "70%", marginBottom: "20px"}}>
              Troca de páginas dentro do conceito de SPA com a biblioteca react-router.
          </h2>
          <Container data-aos="slide-up">
              <LinkRouter to="/sonicesperando">
                  <NewButton>Trocar página</NewButton>     
              </LinkRouter>
          </Container>
        </NewWrapper>
      : null}    
    </>
  )
}
