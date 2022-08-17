import React from "react";
import styled from "styled-components";

interface Props {
  key: any;
  categoryStatus: string;
  personagem: any;
}

interface PropsContainer {
  categoryStatus: string;
  category: any;
}

const Container = styled.div<PropsContainer>`
  display: ${(props) =>
    props.categoryStatus === props.category || props.categoryStatus === ""
      ? "flex"
      : "none"};
  flex-direction: column;
  border: 3px solid white;
  color: white;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  padding: 10px;
  gap: 10px;
  width: 150px;
  height: 150px;

  div {
    width: 100%;
  }

  .name {
    font-size: 20px;
    text-align: center;
  }
`;

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