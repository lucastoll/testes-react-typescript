import React from "react";
import styled from "styled-components";
import { useToggleDisplayState } from "../../context/useToggleDisplay";

import { Link, Titulo } from "../useState&props/styles";
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


export function Section4() {
    const {display} = useToggleDisplayState();

    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    

    const personagensSonic = [
        {nome: "Sonic", imagem: "https://i.pinimg.com/originals/51/65/d5/5165d56c7349e2bcbf0cf4ec32b2fab7.png", texto: "O sonic."},
        {nome: "Eggman", imagem: "http://retrocdn.net/images/b/bd/Superstars_Eggman.png", texto: "???????? Que porra é essa maluco esquisito"},
        {nome: "Amy", imagem: "https://w7.pngwing.com/pngs/723/671/png-transparent-amy-rose-sonic-the-fighters-tails-sonic-heroes-sonic-runners-others-3d-computer-graphics-sonic-the-hedgehog-video-game-thumbnail.png", texto: "PNG filho da puta"},
        {nome: "Shadow", imagem: "https://www.pngitem.com/pimgs/m/562-5620563_shadow-sonic-png-download-shadow-the-hedgehog-color.png", texto: "Não sei mano achei daora"},
        {nome: "Tails", imagem: "https://imagensemoldes.com.br/wp-content/uploads/2018/05/Sonic-Tails-Raposa-4-PNG.png", texto: "Raposão dois rabos."},
        {nome: "Knuckles", imagem: "https://www.seekpng.com/png/full/210-2101113_knuckles-sonic-the-hedgehog-knuckles-the-echidna.png", texto: "pézão 52"},
        {nome: "Sonic SSJ", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZhWgB3ZfXAyGvb4-V6jsZt6QcaTuPVkxFQ&usqp=CAU", texto: "AAAAAAAAAAAAA\nAAAAAAA\nAAAAAAAAAA\nAAAAAAA"}
    ]

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



