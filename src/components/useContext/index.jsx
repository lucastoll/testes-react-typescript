import { Wrapper, Titulo, Link } from "../useState&props/styles"
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import styled from 'styled-components';

const Button = styled.button`
  font-size: 16px;
  margin: 4px 2px;
  padding: 16px 32px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: black;
  color: white;
  border: 2px solid white;
`

const P = styled.p`
    color: white;
    width: 80%;
    max-width: 600px;
    margin-bottom: 25px;
`;

export const Section5 = function () {
    const {display, setDisplay} = useToggleDisplayState();
    return(
        <Wrapper data-aos="flip-left" style={display ? {backgroundColor: "#000000"} : {backgroundColor: "#000000"}}>
            <Link id="secao5"/>
            <Titulo>UseContext</Titulo>
            <P>O context é uma solução para o problema de ficar passando props de pai pra filho infinitamente pra chegar no componente que você precisa usar.</P>
            <P>Perceba que ao clicar no botão abaixo, todos os componentes do site são alterados, sendo que é alterado o componente Card, que é filho direto da seção anterior</P>
            <Button onClick={() => setDisplay(!display)}>Alterar contexto</Button>
        </Wrapper>
    )
}