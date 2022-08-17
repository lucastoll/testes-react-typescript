import React from "react";
import { Container } from "./stylesCard";

interface Props {
  key: any;
  categoryStatus: string;
  personagem: any;
}


export default function Card({ personagem, categoryStatus } : Props) {
  return (
    <Container categoryStatus={categoryStatus} category={personagem.categoria}>
      <div className="name">{personagem.nome}</div>
      <div>{personagem.categoria}</div>
      <div>Velocidade: {personagem.velocidade}</div>
      <div>Força: {personagem.forca}</div>
    </Container>
  );
}