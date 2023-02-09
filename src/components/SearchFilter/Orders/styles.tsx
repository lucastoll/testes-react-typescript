import styled from "styled-components";

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
  background: ${(props) =>
		props.orderStatus === props.id ? "blue" : "transparent"};
`;