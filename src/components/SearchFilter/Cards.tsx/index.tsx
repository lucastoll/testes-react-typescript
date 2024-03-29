import React, { memo, useEffect, useState } from "react";
import Card  from "./card";
import personagensSonic from "../../../data/personagensSonicSearch.json";
import { CardsWrapper } from "./styles";


interface Props{
    categoryStatus: string;
    orderStatus: string;
    searchBarStatus: string;
}

interface Personagem{
    id: number,
    nome: string,
    categoria: string,
    forca: number,
    velocidade: number
}

function Cards({categoryStatus, orderStatus, searchBarStatus} : Props) {
    const [lista, setLista] = useState(personagensSonic);

    function filterOrder(lista : Personagem[]) : Personagem[] {
        switch(orderStatus){
            case "forca":
                return lista.sort((a, b) => (a.forca < b.forca ? 1 : -1));
            case "velocidade":
                return lista.sort((a, b) => (a.velocidade < b.velocidade ? 1 : -1));
            default: 
                return lista;
        }
    }

    function filterSearch(characterName: string) {
        const regex = new RegExp(searchBarStatus, "i");
        return regex.test(characterName);
    }

    function filterCategory(characterCategory: string) {
        if(categoryStatus !== "") return categoryStatus === characterCategory;
            return true;
    }

    useEffect(() => {
      const novaLista : Personagem[] = personagensSonic.filter(personagem => filterSearch(personagem.nome) && filterCategory(personagem.categoria));
      setLista(filterOrder(novaLista));

    }, [searchBarStatus, categoryStatus, orderStatus]);

  return (
      <CardsWrapper>
          {lista.map((personagem) => (
              <Card
                  key={personagem.id}
                  nome={personagem.nome}
                  categoria={personagem.categoria}
                  forca={personagem.forca}
                  velocidade={personagem.velocidade}
              />
          ))}
      </CardsWrapper>
  );
}

export default memo(Cards); 