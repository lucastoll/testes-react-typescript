import React, { useState } from "react";
import { Container, Link, Titulo, Wrapper } from "../UseState&props/styles";

import personagensSonic from "../../assets/personagensSonicSearch.json";
import { v4 as uuidv4 } from "uuid";
import Card from "./card";


import styled from "styled-components";
import { useToggleDisplayState } from "../../context/useToggleDisplay";

const NewWrapper = styled(Wrapper)`
  background: #c70000;
`;

const SearchBar = styled.input`
  min-width: 200px;
  max-width: 300px;
  width: 100%;
  height: 30px;
  padding: 5px;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 10px;
  max-width: 1100px;
  padding: 0px 20px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: center;
  width: 100%;
  gap: 20px;
  overflow-y: hidden;
`;

interface PropsCategory{
  categoryStatus: string;
}

const Category = styled.div<PropsCategory>`
  width: 100px;
  height: 30px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: ${(props) =>
    props.categoryStatus === props.id ? "blue" : "transparent"};
`;

const OrderWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

interface PropsOrderCategory{
  orderStatus: string;
}

const OrderCategory = styled.div<PropsOrderCategory>`
  width: 100px;
  height: 30px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export function SearchFilter() {
  const { display } = useToggleDisplayState();

  const [searchBarStatus, setSearchBarStatus] = useState("");
  const [categoryStatus, setCategoryStatus] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [lista, setLista] = useState(personagensSonic);


  function order(lista){            
    if(orderStatus === "")
      setLista(lista)
    else if(orderStatus === "velocidade")
      setLista(lista.sort((a, b) => (a.velocidade < b.velocidade ? 1 : -1)))
    else
      setLista(lista.sort((a, b) => (a.forca < b.forca ? 1 : -1)))
  }

  return (
    <>
      {
        display ? 
        <NewWrapper>
          <Container style={{ width: "100%", gap: "20px" }}>
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
                    : setOrderStatus((event.target as HTMLElement).id)
                    order(lista)
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
                    : setOrderStatus((event.target as HTMLElement).id)
                    order(lista)
                }
                }
              >
                Força
              </OrderCategory>
            </OrderWrapper>
            <CardWrapper>
              {
              lista
                .filter((val) => {
                  if (searchBarStatus === "") {
                    return val;
                  } else if (
                    val.nome.toLowerCase().includes(searchBarStatus.toLowerCase())
                  ) {
                    return val;
                  }
                  return 0;
                })
                .map((val) => (
                  <Card
                    key={uuidv4()}
                    categoryStatus={categoryStatus}
                    personagem={val}
                  />
                ))}
            </CardWrapper>
          </Container>
        </NewWrapper>
        : null
      }
    </>
  )
}