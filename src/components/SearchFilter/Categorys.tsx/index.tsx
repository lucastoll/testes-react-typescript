import React, { memo } from "react";
import { Category, CategorysWrapper } from "./styles";

interface Props{
    categoryStatus: string;
    setCategoryStatus: React.Dispatch<React.SetStateAction<string>>;
}

function Categorys({categoryStatus, setCategoryStatus} : Props) {
  return (
    <>
    <h2 style={{ color: "white" }}>Filtrar categorias</h2>
    <CategorysWrapper>
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
    </CategorysWrapper>
    </>
  );
}

export default memo(Categorys);