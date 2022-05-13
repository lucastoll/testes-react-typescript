import React, { Component } from "react";
import styled from "styled-components";
import { Link, Titulo } from "../section1/styles";
import Slider from "react-slick";
import logo from "../../assets/section4/logo.png";
import { v4 as uuidv4} from 'uuid'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
width: 100%;
height: 700px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #a0ad25;
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
`;

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;
height: 450px;
background: #eff7f9;
border: 10px solid #012d6c;
border-radius: 32px;
color: #012d6c;
padding: 10px;
gap: 20px;
position: relative;

.WrapperNome{
    background: #012d6c;
    clip-path: polygon(25% 0%, 100% 0%, 83% 99%, 0 100%);
    color: white;
    font-family: sans-serif;
    font-size: 22px;
    font-weight: 600;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding-top: 2px;
    margin-top: 20px;
}

.Logo{
    width: 90px;
    position: absolute;
    z-index: 1;
    left: 5px;
    top: -25px;

}

.ImagemPersonagem{
    width: 80%;
    height: 200px;
}

.DivTexto{
    width: 90%;
    height: 100px;
    border: 5px solid #012d6c;
    color: #012d6c;
    font-size: 18px;
    padding: 4px;
    font-family: sans-serif;
    text-align: left;
}
`;

export class Section4 extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
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
    <Wrapper>
      <Link id="secao5"></Link>
      <Titulo>Renderização com .map</Titulo>
      <h2>Dado uma array personagensSonic[ ], a aplicação renderiza:</h2>
    <CarouselContainer>
        <Slider {...settings}>
        {personagensSonic.map((personagem) => (
            <div key={uuidv4()}>
            <Card>
                <img className="Logo" src={logo} alt=""/>
                <div className="WrapperNome"><p>{personagem.nome}</p></div>
                <img className="ImagemPersonagem" src={personagem.imagem} alt="" />
                <div className="DivTexto">{personagem.texto}</div>
            </Card>
            </div>
        ))}
        </Slider>
    </CarouselContainer>
    </Wrapper>
    );
  }
}


