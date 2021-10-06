import { createContext, useState } from "react";


export const SearchBarContext = createContext()


export const SearchBarProvider = (props) =>{
    const [value, setValue] = useState("");
    const [contentBar, setContentBar] = useState([])

    return(

        <SearchBarContext.Provider value={{value, setValue, contentBar, setContentBar}}>
                {props.children}
        </SearchBarContext.Provider>
    )
}