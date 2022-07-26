import React from 'react'
import { Container, Link, Titulo, Wrapper } from "../UseState&props/styles";


export default function SearchFilter() {
  return (
    <Wrapper style={{backgroundColor: "#c70000"}}>
        <Container>
            <Titulo>
                SearchFilter
                <Link id="secao7"></Link>
            </Titulo>
        </Container>
    </Wrapper>
  )
}
