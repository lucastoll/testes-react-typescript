import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background: #fffc01;
  color: white;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 99;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 20px;
  }
`;

export const DivLogo = styled.div`
  width: 200px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const WrapperLinks = styled.div`
  display: flex;
  list-style: none;
  color: #0038a8;
  font-size: 16px;
  gap: 10px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
    gap: 20px;
  }
`;
