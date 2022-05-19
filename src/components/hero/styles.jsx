import styled from "styled-components";
import background from "../../assets/home/background.jpg";

export const Wrapper = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.6) 50%
    ),
    url("${background}");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-decoration: underline;
  position: relative;

  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;

export const Titulo = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: white;
  margin-bottom: 250px;
  text-decoration: underline;
`;

export const Container = styled.div`
  padding-top: 113px;

  @media screen and (min-width: 410px) {
    padding-top: 110px;
  }
`;

export const Link = styled.div`
  position: absolute;
  top: -100px;
`;
