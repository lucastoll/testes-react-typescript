import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #1e4903;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const Titulo = styled.h1`
  color: white;
  font-size: 36px;
  margin-top: 20px;
`;

export const Link = styled.div`
  position: absolute;
  top: -100px;
`;

export const DivSonic = styled.div`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    font-size: 1.1rem;

    button{
        height: 40px;
    }

    @media screen and (min-width: 400px){
        flex-direction: row;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
`

 
export function Numero(props){
    return (
        <DivSonic>
            <p>O sonicao ja foi virado: {(props.num) / 90} vezes</p>
            <button onClick={()=> props.setNum(props.num+90)}> () ={">"} clique para virar sonicao</button>
        </DivSonic>
    )
}