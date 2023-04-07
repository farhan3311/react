import React, {useState, useContext, createContext} from "react";
import data from '../config/data.json'
const ColorsContext = createContext();


export const ColorsProvider = ({children}) => {
    const [globColors, setGlobColors] = useState([]);
    return (
        <ColorsContext.Provider value={{globColors, setGlobColors}} >
            {children}
        </ColorsContext.Provider>
        
    )
}
export const useColors = () => useContext(ColorsContext)