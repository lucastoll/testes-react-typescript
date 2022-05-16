import React, { useState } from "react";
import styled from "styled-components";
import { Link, Titulo, Wrapper } from "../section1/styles";


const Form = styled.form`
  width: calc(fit-content);
  padding: 20px;
  background: blue;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  gap: 10px;
  border: 2px solid white;

  > h1 {
    color: white;
    font-size: 24px;
  }

  > input {
      width: 200px;
    height: 40px;
    padding: 4px;
  }

  > button {
      width: 200px;
      height: 40px;
      padding: 4px;
      font-size: 24px;
  }
  `;

export const Section3 = function () {
    const [text, setText] = useState("sonic");
    const [nome, setNome] = useState("sonic");
    
    function trocaTitulo(event) {
        event.preventDefault();
        setNome(text)
      }
    
    function handleChange(event) {
        setText(event.target.value);
    }
    
  return (
    <Wrapper style={{backgroundColor: "blue"}}>
      <Link id="secao3"></Link>
      <Titulo>Formulário.</Titulo>
      <Form onSubmit={trocaTitulo}>
        <h1>Boas vindas {nome}</h1>
        <input
          type="text"
          value={text}
          maxLength="20"
          onChange={(event) => {
            handleChange(event);
          }}
          placeholder="Digite o título da página"
          required
        />
        <button type="submit">Trocar titulo</button>
      </Form>
    </Wrapper>
  );
};
