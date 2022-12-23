import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import  GifSonicEsperando from "../assets/router/waiting.gif";
import BalaoFala from "../assets/router/balao.png";

const SonicFeio = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
    background: #2991e6;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60%;
        max-width: 400px;

        h4{
            margin-top: 20px;
            color: white;
        }
    }

    h2{
        color: white;
        text-align: center;
    }

    .sonicEsperando{
        width: 90%;
        max-width: 300px;
    }

    .containerBalao{
        position: relative;
    }

    .balao{
        width: 100%;
        max-width: 300px;
        min-height: 100px;
    }

    .fala{
        position: absolute;
        max-width: 80%;
        word-wrap: break-word;
        top: 20px;
        left: 25px;

        @media screen and (max-width: 500px){
            left: 12px;
        }
    }
`;

export default function SonicEsperando() {
	const [seconds, SetSeconds] = useState(0);
	const [frase, SetFrase] = useState("que foi?");

	useEffect(()=> {
		const interval = setInterval(() => { 
			SetSeconds((seconds) => (seconds + 1));
		}, 1000);

		return () => clearInterval(interval); /* Se não for retornado assim, cada vez que o componente renderiza ele faz um intervalo novo, bugando tudo. */
	}, []);

	useEffect(()=> {
		console.log(seconds);
		if(seconds === 4){
			SetFrase("");
		}
		else if(seconds === 5){
			SetFrase("ta esperando o que? vaza");
		}
		else if(seconds === 10){
			SetFrase("");
		}
		else if(seconds === 11){
			SetFrase("sai daqui mano");
		}
		else if(seconds === 16){
			SetFrase("");
		}
		else if(seconds === 17){
			SetFrase("saia da minha página!!!!!!!!!");
		}
		else if(seconds === 21){
			SetFrase("");
		}
		else if(seconds === 22){
			SetFrase("SUCUMBA");
		}
		else if(seconds === 27){
			SetSeconds(4);
		}
	}, [seconds]);
  

	return (
		<HashLink to="/#secao6">
			<SonicFeio>
				<h2 id="hash">Você entrou na página do sonic esperando!!!</h2>
				<div>
					<div className='containerBalao'>
						<img className="balao" src={BalaoFala} alt=""/>
						<p className='fala'>{frase}</p>
					</div>
					<img className='sonicEsperando' src={GifSonicEsperando} alt=" "></img>
					<h4>ele esta esperando você sair</h4>
				</div>
				<h2>Clique em qualquer lugar para sair de imediato.</h2>
			</SonicFeio>
		</HashLink>
	);
}
