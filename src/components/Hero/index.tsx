import React from "react";

import { useToggleDisplayState } from "../../context/useToggleDisplay";
import { Wrapper, Container, Link } from "./styles";

import sonic from "../../assets/hero/sonic.gif";
import gameplay from "../../assets/hero/gameplay.mp4";

export function Hero() {
	const {display} = useToggleDisplayState();
	return (
		<>
			{display ?
				<Container>
					<Link id="home"></Link>
					<Wrapper>
						<video src={gameplay} autoPlay loop muted />
						<img className="sonic" src={sonic} alt="" />
						<div className="overlay"></div>
					</Wrapper>
				</Container>
				: null}
		</>
	);
}
