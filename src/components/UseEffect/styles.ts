import styled from "styled-components";
const { Wrapper, Container } = require("../UseState&props/styles");


export const NewWrapper = styled(Wrapper)`
  background: #c70000;
  padding-bottom: 0px;
`;

export const NewContainer = styled(Container)`
  margin-bottom: 20px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`
