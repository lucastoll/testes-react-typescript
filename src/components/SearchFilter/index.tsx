import React, { useState } from "react";
import { Link, Titulo } from "../UseState&props/styles";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import {
    Category,
    CategoryWrapper,
    NewContainer,
    NewWrapper,
    OrderCategory,
    OrderWrapper,
    SearchBar,
} from "./styles";
import { MemoCardWrapper } from "./CardWrapper.tsx";

function SearchFilter() {
    const { display } = useToggleDisplayState();

    const [searchBarStatus, setSearchBarStatus] = useState("");
    const [categoryStatus, setCategoryStatus] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
    
    return (
        <>
            {display ? (
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
                        </div>
                        <OrderWrapper>
                            <OrderCategory
                                id="velocidade"
                                orderStatus={orderStatus}
                                onClick={(event) => {
                                    orderStatus === (event.target as HTMLElement).id
                                        ? setOrderStatus("")
                                        : setOrderStatus((event.target as HTMLElement).id);
                                }}
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
                                }}
                            >
                                Força
                            </OrderCategory>
                        </OrderWrapper>
                        <MemoCardWrapper categoryStatus={categoryStatus} orderStatus={orderStatus} searchBarStatus={searchBarStatus}/>
                    </NewContainer>
                </NewWrapper>
            ) : null}
        </>
    );
}

export default SearchFilter;