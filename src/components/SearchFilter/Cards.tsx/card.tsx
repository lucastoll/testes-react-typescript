import React, { memo } from "react";
import { Container } from "./stylesCard";

interface Props {
  nome: string;
  categoria: string;
  forca: number;
  velocidade: number;
}

function Card({ nome, categoria, forca, velocidade } : Props) {
	return (
		<Container>
			<div className="name">{nome}</div>
			<div>{categoria}</div>
			<div>Velocidade: {velocidade}</div>
			<div>Força: {forca}</div>
		</Container>
	);
}

export default memo(Card);