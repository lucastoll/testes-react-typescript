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

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 10px;
  max-width: 1100px;
  padding: 0px 20px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: center;
  width: 100%;
  gap: 20px;
  overflow-y: hidden;
`;

interface PropsCategory{
  categoryStatus: string;
}

export const Category = styled.div<PropsCategory>`
  width: 100px;
  height: 30px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: ${(props) =>
		props.categoryStatus === props.id ? "blue" : "transparent"};
`;

export const OrderWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

interface PropsOrderCategory{
  orderStatus: string;
}

export const OrderCategory = styled.div<PropsOrderCategory>`
  width: 100px;
  height: 30px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;