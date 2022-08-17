import React from "react";
import { useToggleDisplayState } from "../../context/useToggleDisplay";

import personagensSonic from "../../assets/personagensSonicCarrossel.json"
import { Card } from "./card";

import { v4 as uuidv4} from 'uuid'
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
      {display ? <Titulo data-aos="zoom-in">Renderização com .map</Titulo> : <NewTitulo>?CONTEXTO?</NewTitulo>} 
      {display ? <h2 data-aos="zoom-in">Dado uma array personagensSonic[ ], a aplicação renderiza:</h2> : null}
        <CarouselContainer data-aos="zoom-in">
            <Slider {...settings}>
                {personagensSonic.map((personagem) => (
                    <div key={uuidv4()}>
                        <Card personagem={personagem}/> 
                    </div>
                ))}
            </Slider>
        </CarouselContainer>
    </Wrapper>
    );
  }


