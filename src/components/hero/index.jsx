import { Wrapper, Container, Link } from "./styles";
import sonic from "../../assets/home/sonic.gif";
import styles from "./style.module.css";
import React from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";


export const Home = function () {
  const {display} = useToggleDisplayState();
  return (
    <>
    {display ?
      <Container>
        <Wrapper>
          <Link id="home"></Link>
          <img className={styles.sonic} src={sonic} alt="" />
        </Wrapper>
      </Container>
    : null}
    </>
  );
};
