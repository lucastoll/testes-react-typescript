import React from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import { NewButton, NewWrapper, P } from "./styles";
import { Titulo, Link } from "../UseState&props/styles";

export const UseContext = function () {
    const {display, setDisplay} = useToggleDisplayState();
    return(
        <NewWrapper>
            <Link id="secao6"/>
            <Titulo>UseContext</Titulo>
            <P>O context é uma solução para o problema de ficar passando props de pai pra filho infinitamente pra chegar no componente que você precisa usar.</P>
            <P>Perceba que ao clicar no botão abaixo, todos os componentes do site são alterados, sendo que é alterado o componente Card, que é filho direto da seção anterior</P>
            <NewButton onClick={() => setDisplay(!display)}>Alterar contexto</NewButton>
        </NewWrapper>
    )
}