import React from "react";
import styled from "styled-components";
import logo from "../../assets/render.map/logo.png";
import contexto from "../../assets/render.map/contexto.jpg";
import { useToggleDisplayState } from "../../context/useToggleDisplay";

const CardStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;
height: 450px;
background: #eff7f9;
border: ${props => props.display ? '10px solid #012d6c' : '10px solid #000000'};
border-radius: 32px;
color: ${props => props.display ? '#012d6c' : '#000000'};
padding: 10px;
gap: 20px;
position: relative;

.WrapperNome{
    background: ${props => props.display ? '#012d6c' : '#000000'};
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
    border: ${props => props.display ? '' : '5px solid #000000'};
}

.DivTexto{
    width: 90%;
    height: 100px;
    border: ${props => props.display ? '5px solid #012d6c' : '5px solid #000000'};
    font-size: 18px;
    padding: 4px;
    font-family: sans-serif;
    text-align: left;
}
`;

export function Card({personagem}) {
    const {display} = useToggleDisplayState();

    return (
        <>
            {display 
            ?
            <CardStyled display={display ? 1 : undefined}> {/* Tratamento feito no display pra tirar o erro 'Recieved true for a non-boolean atributte' */}
                <img className="Logo" src={logo} alt=""/>
                <div className="WrapperNome"><p>{personagem.nome}</p></div>
                <img className="ImagemPersonagem" src={personagem.imagem} alt="" />
                <div className="DivTexto">{personagem.texto}</div>
            </CardStyled>
            : 
            <CardStyled>
                <div className="WrapperNome"><p>UseContext</p></div>
                <img className="ImagemPersonagem" src={contexto} alt="" />
                <div className="DivTexto">O contexto foi alterado.</div>
            </CardStyled>
            }
        </>
    )
}

