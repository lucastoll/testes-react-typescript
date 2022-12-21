import styled from "styled-components";
import { Titulo } from "../UseState&props/styles";


interface PropsWrapper {
    display: boolean | number;
}

export const Wrapper = styled.div<PropsWrapper>`
width: 100%;
display: flex;
padding: 50px 0px 70px 0px;
flex-direction: column;
align-items: center;
background-color: ${(props) => props.display ? "#c70000" : "#979797" };
border-top: 10px solid #e0e000;
color: white;
> h2 {
    margin: 15px;
    text-align: center;
}
position: relative;
`;

export const CarouselContainer = styled.div`
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

export const NewTitulo = styled(Titulo)`
    color: #000000
`;
