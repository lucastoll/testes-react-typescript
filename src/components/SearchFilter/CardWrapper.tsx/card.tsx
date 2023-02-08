import React, { memo } from "react";
import { Container } from "./stylesCard";

interface Props {
  nome: string;
  categoria: string;
  forca: number;
  velocidade: number;
}

function CardFodase({ nome, categoria, forca, velocidade } : Props) {
	console.log(nome);

	return (
		<Container>
			<div className="name">{nome}</div>
			<div>{categoria}</div>
			<div>Velocidade: {velocidade}</div>
			<div>Força: {forca}</div>
		</Container>
	);
}

export const Card = memo(CardFodase);