import { Wrapper, Titulo, Link } from "../section1/styles"
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import styled from 'styled-components';

const Button = styled.button`
  font-size: 16px;
  margin: 4px 2px;
  color: white;
  padding: 16px 32px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: black;
  color: white;
  border: 2px solid white;
`

export const Section5 = function () {
    const {display, setDisplay} = useToggleDisplayState();
    return(
        <Wrapper style={display ? {backgroundColor: "#000000"} : {backgroundColor: "#000000", height: '40vh'}}>
            <Link id="secao5"/>
            <Titulo>Use Context</Titulo>
            <Button onClick={() => setDisplay(!display)}>Alterar contexto</Button>
        </Wrapper>
    )
}