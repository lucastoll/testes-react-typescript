import React from "react";
import styled from "styled-components";

const Container = styled.div`
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

export default function Card({ personagem, categoryStatus }) {
  return (
    <Container categoryStatus={categoryStatus} category={personagem.categoria}>
      <div className="name">{personagem.nome}</div>
      <div>{personagem.categoria}</div>
      <div>Velocidade: {personagem.velocidade}</div>
      <div>Força: {personagem.forca}</div>
    </Container>
  );
}
