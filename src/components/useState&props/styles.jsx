import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-repeat: repeat;
  background-color: #2991e6;
  border-top: 10px solid #e0e000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 50px 0px;
`;

export const Titulo = styled.h1`
  color: white;
  font-size: 36px;
  margin-top: 20px;
  text-align: center;
  margin: 10px 20px;
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
    align-items: center;
    gap: 50px;
    width: 40vw;

    > img {
        max-width: 300px;
        width: 100%;
    }
`

 
export function Numero(props){
    return (
        <DivSonic>
            <p>O sonicao ja foi virado: {(props.num) / 90} vezes</p>
            <button onClick={()=> props.setNum(props.num+90)}> () ={">"} clique para virar sonicao</button>
        </DivSonic>
    )
}