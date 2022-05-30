import React from "react";
import styled from "styled-components";
import { useToggleDisplayState } from "../../context/useToggleDisplay";

import personagensSonic from "../../assets/personagensSonic.json"
import { Link, Titulo } from "../UseState&props/styles";
import Card from "./card";

import { v4 as uuidv4} from 'uuid'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
width: 100%;
display: flex;
padding: 50px 0px 70px 0px;
flex-direction: column;
align-items: center;
background-color: #c70000;
border-top: 10px solid #e0e000;
color: white;
> h2 {
    margin: 15px;
    text-align: center;
}
position: relative;
`;

const CarouselContainer = styled.div`
width: 250px;
margin-top: 20px;

.slick-dots li button:before{
  color: white;
  opacity: 0.5;
  font-size: 12px;
}

.slick-dots li button:hover:before{
    opacity: 0.75;
}

.slick-dots li.slick-active button:before{
    opacity: 0.9;
}

.slick-prev:before, .slick-next:before{
   font-size: 30px;
}

.slick-prev{
    left: -35px;
}
`;


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
    <Wrapper style={display ? null : {backgroundColor: '#979797'}}>
      <Link id="secao4"></Link>
      {display ? <Titulo data-aos="zoom-in">Renderização com .map</Titulo> : <Titulo style={{color: '#000000'}}>?CONTEXTO?</Titulo>} 
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



