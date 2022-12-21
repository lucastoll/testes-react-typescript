import { useToggleDisplayState } from "../../context/useToggleDisplay";
import { CardStyled } from "./stylesCard";
import logo from "../../assets/render.map/logo.png";
import contexto from "../../assets/render.map/contexto.jpg";
import React from "react";

interface Props {
    nome: string;
    imagem: string;
    texto: string;
}

export function Card({nome, imagem, texto} : Props) {
	const {display} = useToggleDisplayState();

	return (
		<>
			{display 
				?
				<CardStyled display={display ? 1 : undefined}> {/* Tratamento feito no display pra tirar o erro 'Recieved true for a non-boolean atributte' */}
					<img className="Logo" src={logo} alt=""/>
					<div className="WrapperNome"><p>{nome}</p></div>
					<img className="ImagemPersonagem" src={imagem} alt="" />
					<div className="DivTexto">{texto}</div>
				</CardStyled>
				: 
				<CardStyled display={display}>
					<div className="WrapperNome"><p>UseContext</p></div>
					<img className="ImagemPersonagem" src={contexto} alt="" />
					<div className="DivTexto">O contexto foi alterado.</div>
				</CardStyled>
			}
		</>
	);
}

