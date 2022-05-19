import { Wrapper, Container, Link } from "./styles";
import sonic from "../../assets/hero/sonic.gif";
import styles from "./style.module.css";
import React from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import gameplay from "../../assets/hero/gameplay.mp4"



export const Home = function () {
  const {display} = useToggleDisplayState();
  return (
    <>
    {display ?
      <Container>
        <Wrapper>
          <Link id="home"></Link>
          <video src={gameplay} autoPlay loop muted />
          <img className={styles.sonic} src={sonic} alt="" />
          <div className="overlay"></div>
        </Wrapper>
      </Container>
    : null}
    </>
  );
};
