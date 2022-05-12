import React, { useState } from "react";
import styled from "styled-components";

/*     const Wrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: #060881;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    `;
    
    const Input = styled.input`
    width: 200px;
    padding: 4px;
    height: 30px;
    margin-top: 20px;
    `;
    
    const Titulo = styled.h1`
    color: white;
    font-size: 36px;
    margin-top: 20px;
    `;
    
    const Link = styled.div`
    position: absolute;
    top: -100px;
    `; */

const Form = styled.form`
  width: 100%;
  background: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  gap: 10px;

  > input {
      width: 200px;
    height: 40px;
    padding: 4px;
  }

  > button {
      width: 100px;
      height: 40px;
      padding: 4px;
  }
  `;

export const Section3 = function () {
    const [text, setText] = useState("");
    const [nome, setNome] = useState("");
    
    
    function trocaTitulo(event) {
        event.preventDefault();
        setNome(text)
        
    }
    
    function handleChange(event) {
        setText(event.target.value);
    }
    
  return (
    <>
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
    </>
  );
};
