import React from "react";
import { Container } from "./stylesCard";

interface Props {
  categoryStatus: string;
  nome: string;
  categoria: string;
  forca: number;
  velocidade: number;
}

export default function Card({ nome, categoria, forca, velocidade, categoryStatus } : Props) {
	return (
		<Container categoryStatus={categoryStatus} category={categoria}>
			<div className="name">{nome}</div>
			<div>{categoria}</div>
			<div>Velocidade: {velocidade}</div>
			<div>Força: {forca}</div>
		</Container>
	);
}