import { Button } from "../Button";
import styled from "styled-components";
import { Wrapper } from "../UseState&props/styles";

export const NewWrapper = styled(Wrapper)`
  background-color: #2991e6;
`;

export const NewButton = styled(Button)`
  background-color: #2991e6;
`;

export const Form = styled.form`
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