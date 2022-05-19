import styled from "styled-components";
  
export const Wrapper = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  position: relative;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 110px)
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
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
