import React, { memo } from "react";
import { OrderCategory, OrderWrapper } from "./styles";

interface Props{
    orderStatus: string;
    setOrderStatus: React.Dispatch<React.SetStateAction<string>>;
}

function Orders({orderStatus, setOrderStatus} : Props){
    return (
        <>
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
        </>
    );
}

export default memo(Orders);