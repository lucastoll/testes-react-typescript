import React from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";

const { Wrapper, Container, Link } = require("./styles");
const sonic = require("../../assets/hero/sonic.gif");
const gameplay = require("../../assets/hero/gameplay.mp4");

export const Hero = function () {
  const {display} = useToggleDisplayState();
  return (
    <>
    {display ?
      <Container>
        <Wrapper>
          <Link id="home"></Link>
          <video src={gameplay} autoPlay loop muted />
          <img className="sonic" src={sonic} alt="" />
          <div className="overlay"></div>
        </Wrapper>
      </Container>
    : null}
    </>
  );
};
