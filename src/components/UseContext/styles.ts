import styled from 'styled-components';
import { Button } from "../Button"
const { Wrapper } = require("../UseState&props/styles");


export const NewWrapper = styled(Wrapper)`
  background: #000000;
`;

export const NewButton = styled(Button)`
  background: #000000;
`;

export const P = styled.p`
    color: white;
    width: 80%;
    max-width: 600px;
    margin-bottom: 25px;
`;
