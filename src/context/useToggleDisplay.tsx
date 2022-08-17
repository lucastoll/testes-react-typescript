import React, { createContext, ReactNode, useContext, useState } from "react";

interface ToggleDisplayContextProps {
    children: ReactNode
}

interface IDisplayContext {
    display: boolean;
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleDisplayContext = createContext({} as IDisplayContext);

export const ToggleDisplayProvider = function ({children} : ToggleDisplayContextProps) : JSX.Element {
    const [display, setDisplay] = useState<boolean>(true);
    return(
        <ToggleDisplayContext.Provider value={{display, setDisplay}}>
            {children}
        </ToggleDisplayContext.Provider>
    )
}

export function useToggleDisplayState(){
    return useContext(ToggleDisplayContext)
};


