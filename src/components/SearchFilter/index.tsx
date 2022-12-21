import React, { useState } from "react";
import {  Link, Titulo } from "../UseState&props/styles";

import personagensSonic from "../../assets/personagensSonicSearch.json";
import { v4 as uuidv4 } from "uuid";
import Card from "./card";

import { useToggleDisplayState } from "../../context/useToggleDisplay";
import { CardWrapper, Category, CategoryWrapper, NewContainer, NewWrapper, OrderCategory, OrderWrapper, SearchBar } from "./styles";

export function SearchFilter() {
	const { display } = useToggleDisplayState();

	const [searchBarStatus, setSearchBarStatus] = useState("");
	const [categoryStatus, setCategoryStatus] = useState("");
	const [orderStatus, setOrderStatus] = useState("");
	const [lista, setLista] = useState(personagensSonic);

	function order(lista){            
		if(orderStatus === "")
			setLista(lista);
		else if(orderStatus === "velocidade")
			setLista(lista.sort((a, b) => (a.velocidade < b.velocidade ? 1 : -1)));
		else
			setLista(lista.sort((a, b) => (a.forca < b.forca ? 1 : -1)));
	}

	return (
		<>
			{
				display ? 
					<NewWrapper>
						<NewContainer>
							<Titulo>
              SearchFilter
								<Link id="secao7"></Link>
							</Titulo>
							<SearchBar
								type="text"
								placeholder="Nome do personagem"
								onChange={(event) => setSearchBarStatus(event.target.value)}
								value={searchBarStatus}
							></SearchBar>
    
							<h2 style={{ color: "white" }}>Filtrar categorias</h2>
							<CategoryWrapper>
								<Category
									id="Ouriço"
									categoryStatus={categoryStatus}
									onClick={(event) =>
										categoryStatus === (event.target as HTMLElement).id
											? setCategoryStatus("")
											: setCategoryStatus((event.target as HTMLElement).id)
									}
								>
                Ouriço
								</Category>
								<Category
									id="Humano"
									categoryStatus={categoryStatus}
									onClick={(event) =>
										categoryStatus === (event.target as HTMLElement).id
											? setCategoryStatus("")
											: setCategoryStatus((event.target as HTMLElement).id)
									}
								>
                Humano
								</Category>
								<Category
									id="Robô"
									categoryStatus={categoryStatus}
									onClick={(event) =>
										categoryStatus === (event.target as HTMLElement).id
											? setCategoryStatus("")
											: setCategoryStatus((event.target as HTMLElement).id)
									}
								>
                Robô
								</Category>
								<Category
									id="O resto"
									categoryStatus={categoryStatus}
									onClick={(event) =>
										categoryStatus === (event.target as HTMLElement).id
											? setCategoryStatus("")
											: setCategoryStatus((event.target as HTMLElement).id)
									}
								>
                O resto
								</Category>
							</CategoryWrapper>
							<div>
								<h2 style={{ color: "white" }}>Ordenar por</h2>
								<h4 style={{ color: "white", margin: "0", textAlign: "center" }}>Clicar 2x</h4>
							</div>
    
							<OrderWrapper>
								<OrderCategory
									id="velocidade"
									orderStatus={orderStatus}
									onClick={(event) => {
										orderStatus === (event.target as HTMLElement).id
											? setOrderStatus("")
											: setOrderStatus((event.target as HTMLElement).id);
										order(lista);
									}
									}
								>
                Velocidade
								</OrderCategory>
								<OrderCategory
									id="forca"
									orderStatus={orderStatus}
									onClick={(event) => {
										orderStatus === (event.target as HTMLElement).id
											? setOrderStatus("")
											: setOrderStatus((event.target as HTMLElement).id);
										order(lista);
									}
									}
								>
                Força
								</OrderCategory>
							</OrderWrapper>
							<CardWrapper>
								{
									lista
										.filter((personagem) => {
											if (searchBarStatus === "") {
												return personagem;
											} else if (
												personagem.nome.toLowerCase().includes(searchBarStatus.toLowerCase())
											) {
												return personagem;
											}
											return 0;
										})
										.map((personagem) => (
											<Card
												key={uuidv4()}
												categoryStatus={categoryStatus}
												nome={personagem.nome}
												categoria={personagem.categoria}
												forca={personagem.forca}
												velocidade={personagem.velocidade}
											/>
										))}
							</CardWrapper>
						</NewContainer>
					</NewWrapper>
					: null
			}
		</>
	);
}