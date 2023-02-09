import styled from "styled-components";

export const CategorysWrapper = styled.div`
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