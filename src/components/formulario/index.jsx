import React, { useState } from "react";
import styled from "styled-components";
import { Link, Titulo, Wrapper } from "../useState&props/styles";
import { useToggleDisplayState } from "../../context/useToggleDisplay";


const Form = styled.form`
  width: fit-content;
  padding: 20px;
  background: #2991e6;
  margin: 15px 20px 0px 20px;
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
    text-align: center;
  }

  > input {
    width: 200px;
    height: 40px;
    padding: 6px;
    background-color: white;
    border: 2px solid black;
  }

  > button {
      width: 200px;
      height: 40px;
      padding: 4px;
      font-size: 24px;
  }
  `;

  const Button = styled.button`
  font-size: 16px;
  margin: 4px 2px;
  padding: 16px 32px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: #2991e6;
  color: white;
  border: 2px solid white;
  `;

export const Section3 = function () {
  const {display} = useToggleDisplayState();
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
    <>
      {display ?
      <Wrapper style={{backgroundColor: "#2991e6"}}>
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
          <Button type="submit">Trocar titulo</Button>
        </Form>
      </Wrapper>
      : null}
    </>
  );
};
