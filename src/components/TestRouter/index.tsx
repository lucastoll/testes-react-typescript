import React from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import { NewButton, NewWrapper } from "./styles";
import { Container, Link, Titulo } from "../UseState&props/styles";
import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

const NewContainer = styled(Container)`
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
`;

export function TestRouter() {
	const {display} = useToggleDisplayState();

	return (
		<>
			{display ?      
				<NewWrapper style={{background: "#2991e6"}}>
					<Link id="secao5"></Link>
					<Titulo data-aos="slide-up">Router</Titulo>
					<h2 data-aos="slide-up" style={{color: "#ffffff", maxWidth: "650px", width: "70%", marginBottom: "20px"}}>
						Troca de páginas dentro do conceito de SPA com a biblioteca react-router.
					</h2>
					<NewContainer data-aos="slide-up">
						<LinkRouter to="/sonicesperando">
							<NewButton>Sonic puto</NewButton>     
						</LinkRouter>
						<LinkRouter to="/ronaldo">
							<NewButton>Página 404</NewButton>     
						</LinkRouter>
					</NewContainer>
				</NewWrapper>
				: null}    
		</>
	);
}
