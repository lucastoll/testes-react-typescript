import React, { useState } from "react";
import { Link, Titulo } from "../UseState&props/styles";
import { useToggleDisplayState } from "../../context/useToggleDisplay";
import {
    NewContainer,
    NewWrapper,
    SearchBar,
} from "./styles";
import Cards  from "./Cards.tsx";
import Categorys from "./Categorys.tsx";
import Orders from "./Orders";

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
                            <Link id="secao6"></Link>
                        </Titulo>
                        <SearchBar
                            type="text"
                            placeholder="Nome do personagem"
                            onChange={(event) => setSearchBarStatus(event.target.value)}
                            value={searchBarStatus}
                        ></SearchBar>
                       <Categorys categoryStatus={categoryStatus} setCategoryStatus={setCategoryStatus}/>
                       <Orders orderStatus={orderStatus} setOrderStatus={setOrderStatus}/>
                       <Cards categoryStatus={categoryStatus} orderStatus={orderStatus} searchBarStatus={searchBarStatus}/>
                    </NewContainer>
                </NewWrapper>
            ) : null}
        </>
    );
}

export default SearchFilter;