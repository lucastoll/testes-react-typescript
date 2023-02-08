import React from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";

import personagensSonic from "../../data/personagensSonicCarrossel.json";
import { Card } from "./card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { CarouselContainer, NewTitulo, Wrapper } from "./styles";
import { Link, Titulo } from "../UseState&props/styles";

export function RenderMap() {
	const {display} = useToggleDisplayState();

	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<Wrapper display={+display}> {/* fix error received true for a non-boolean attribute */}
			<Link id="secao4"></Link>
			{display ? <Titulo data-aos="zoom-in">Renderização com .map e páginas dinamicas (ver mais)</Titulo> : <NewTitulo>?CONTEXTO?</NewTitulo>} 
			{display ? <h2 data-aos="zoom-in">Dado uma array personagensSonic[ ], a aplicação renderiza este carrousel</h2> : null}
			<CarouselContainer data-aos="zoom-in">
				<Slider {...settings}>
					{personagensSonic.map((personagem, index) => (
						<div key={index}>
							<Card nome={personagem.nome} imagem={personagem.imagem} texto={personagem.texto}/> 
						</div>
					))}
				</Slider>
			</CarouselContainer>
		</Wrapper>
	);
}


