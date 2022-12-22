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

  .sonic{
    max-width: 300px;
    width: 100%;
    top: -500px;
    z-index: 1;
    position: absolute;
    animation: slideInTopMobile 2s 1s forwards;
}

@media screen and (min-width: 768px) {
    .sonic{
        width: auto;
        max-width: 768px;
        top: auto;
        opacity: 0;
        animation: slideInTop 3s 1s forwards;
    }
}

@keyframes slideInTop {
    0%{
        opacity: 0;
    }

    50%{
        opacity: 1;
        width: 640px;
    }
    75%{
        width: 100%;
    }
    100%{
        width: 640px;
        opacity: 1;
    }
}

@keyframes slideInTopMobile {
    0%{
        top: -400px;
    }

    50%{
        top: 100px;
        max-width: 300px;
    }
    75%{
        max-width: 400px;
    }
    100%{
        max-width: 300px;
        top: 100px;
    }
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
