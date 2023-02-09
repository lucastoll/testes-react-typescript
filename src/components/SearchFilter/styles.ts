import styled from "styled-components";
import { Wrapper, Container } from "../UseState&props/styles";


export const NewWrapper = styled(Wrapper)`
  background: #c70000;
`;

export const NewContainer = styled(Container)`
  width: 100%;
  gap: 20px;
`;

export const SearchBar = styled.input`
  min-width: 200px;
  max-width: 300px;
  width: 100%;
  height: 30px;
  padding: 5px;
`;

