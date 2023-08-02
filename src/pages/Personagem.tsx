/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import personagensSonic from "../data/personagensSonicCarrossel.json";
import contexto from "../assets/render.map/contexto.jpg";

export default function Personagem(){
	const { id } = useParams();
	const navigate = useNavigate();
	const location : {state : any}= useLocation();

    let display;
    if(location?.state?.contextDisplay == undefined){
        display = "true";
    }
    else{
        if(location?.state?.contextDisplay == true)
         display = "true";
        else
         display = "false";
    }
	const personagem = personagensSonic.find(personagem => personagem.nome.toLowerCase() === id?.toLowerCase());


    useEffect(() => {
        if(personagem == undefined){
            navigate("/404");
        }
      }, []);

    interface PropsWrapper{
        display: string;
    }

	const Wrapper = styled.div<PropsWrapper>`
        padding-top: ${props => props.display === "true" ? "150px" : "0px"};
        background-color: ${props => props.display === "true" ? "#2991e6" : "#000000"};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        height: fit-content;
        padding-bottom: 20px;

        span{
            margin-bottom: 50px;
            color: white;
            font-size: 36px;
        }

        h2, p{
            color: white;
        }

        img{
            margin: 20px 0;
            height: 400px;
        }


    `;

	return (
        <Wrapper display={display}>
            {
                display == "true" ?
                <>                
                    <span onClick={() => navigate(-1)}>
                        Voltar    
                    </span>                  
                    <h2>{personagem?.nome}</h2>
                    <img src={personagem?.imagem} alt="" />
                    <p>{personagem?.texto}</p>
                </>
                :
                <>                
                    <span onClick={() => navigate(-1)}>
                        Voltar    
                    </span> 
                    <img src={contexto} alt="" />
                    <h2>não tem nenhum contexto disponível na página de ver mais</h2>
                </>
            }
        </Wrapper>
	);
}

