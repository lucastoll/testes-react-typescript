import React from "react";
import styled from "styled-components";
import Imagem404 from "../assets/notFound/404.jpg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    padding-top: 113px;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6); 
        z-index: 2;
    }
`;

const Container404 = styled.div`
    width: 100%;
    height: calc(100vh - 113px);
    background: url(${Imagem404});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: top center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    h2, h3, button{
        z-index: 3;
        color: white;
    }

    h2{
        color: white;
        font-size: 48px;
        margin: 0;
        text-align: center;
    }

    h3{
        font-size: 18px;
        width: 50%;
        text-align: center;
    }

    button{
        background: #016CC4;
        border: 2px solid white;
        border-radius: 8px;
        width: 157px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<Wrapper>   
			<Container404>
				<h2>404</h2>
				<h3>Você está no lugar errado!, página não encontrada.</h3>
				<button onClick={() => navigate("/")}>Retornar</button>
			</Container404>
		</Wrapper>
	);
}
