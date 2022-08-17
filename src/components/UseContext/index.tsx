import React from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import { Button } from "../Button"
import styled from 'styled-components';

const { Wrapper, Titulo, Link } = require("../UseState&props/styles");

const P = styled.p`
    color: white;
    width: 80%;
    max-width: 600px;
    margin-bottom: 25px;
`;

export const UseContext = function () {
    const {display, setDisplay} = useToggleDisplayState();
    return(
        <Wrapper style={display ? {backgroundColor: "#000000"} : {backgroundColor: "#000000"}}>
            <Link id="secao6"/>
            <Titulo>UseContext</Titulo>
            <P>O context é uma solução para o problema de ficar passando props de pai pra filho infinitamente pra chegar no componente que você precisa usar.</P>
            <P>Perceba que ao clicar no botão abaixo, todos os componentes do site são alterados, sendo que é alterado o componente Card, que é filho direto da seção anterior</P>
            <Button style={{backgroundColor: "#000000"}} onClick={() => setDisplay(!display)}>Alterar contexto</Button>
        </Wrapper>
    )
}