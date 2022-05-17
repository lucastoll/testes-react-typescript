import React, { createContext, useContext, useState } from "react";

const ToggleDisplayContext = createContext();

export const ToggleDisplayProvider = function ({children}) {
    const [display, setDisplay] = useState(true);
    return(
        <ToggleDisplayContext.Provider value={{display, setDisplay}}>
            {children}
        </ToggleDisplayContext.Provider>
    )
}

export function useToggleDisplayState(){
    return useContext(ToggleDisplayContext)
};

