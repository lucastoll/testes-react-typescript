import styled from "styled-components";

interface PropsCardStyled{
    display: number | boolean | undefined;
}

export const CardStyled = styled.div<PropsCardStyled>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;
height: 450px;
background: #eff7f9;
border: ${props => props.display ? "10px solid #012d6c" : "10px solid #000000"};
border-radius: 32px;
color: ${props => props.display ? "#012d6c" : "#000000"};
padding: 10px;
gap: 20px;
position: relative;

button{
    z-index: 2;
    background: white;
    border: 2px solid #012d6c;
    padding: 2px 5px;
    color: #012d6c; 
}

.WrapperNome{
    background: ${props => props.display ? "#012d6c" : "#000000"};
    clip-path: polygon(25% 0%, 100% 0%, 83% 99%, 0 100%);
    color: white;
    font-family: sans-serif;
    font-size: 22px;
    font-weight: 600;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding-top: 2px;
    margin-top: 20px;
}

.Logo{
    width: 90px;
    position: absolute;
    z-index: 1;
    left: 5px;
    top: -25px;
}

.ImagemPersonagem{
    width: 80%;
    height: 200px;
    border: ${props => props.display ? "" : "5px solid #000000"};
}

.DivTexto{
    width: 90%;
    min-height: 80px;
    border: ${props => props.display ? "5px solid #012d6c" : "5px solid #000000"};
    font-size: 18px;
    padding: 4px;
    font-family: sans-serif;
    text-align: left;
}
`;