import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: url(https://www.sonicthehedgehog.com/wp-content/uploads/2021/08/header-bg.gif);
  max-height: ${props => props.mobileWrapperLinks ? "100%" : "113px"};
  color: white !important;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  position: fixed;
  z-index: 99;
  transition: max-height 1s linear;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DivLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 130px;
    height: 50px;
  }

  @media screen and (min-width: 1024px) {
  .hamburguer{
    display: none;
  }

  width: auto;
}
`;

export const WrapperLinks = styled.div`
  color: #ffffff !important;
  background: url(https://www.sonicthehedgehog.com/wp-content/uploads/2021/08/header-bg.gif);
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 15px;
  list-style: none;
  overflow: hidden;
  text-align: center;
  justify-content: flex-start;
  margin-top: 20px;

  @media screen and (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 18px;
    gap: 20px;
    max-height: 50px;
    text-align: left;
    width: auto;
    margin-top: 0px;
  }

  a{
    text-decoration: none;
    color: white;
  }
`;
