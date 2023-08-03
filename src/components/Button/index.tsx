import styled from "styled-components";
import React from "react";

export const Button = styled.button`
border: 2px solid white;
color: white;
cursor: pointer;
font-size: 16px;
margin: 4px 2px;
padding: 16px 32px;
transition-duration: 0.4s;
`;

export const ButtonRender = () => {
    return <Button data-testid="styled-button">Click me</Button>;
};