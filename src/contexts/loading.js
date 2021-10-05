import { createContext, useState } from "react";


export const LoadingContext = createContext()

export const LoadingProvider = (props) =>{

    const [loading, setLoading] = useState(null)
    const [loadingMoreContent, setLoadingMoreContent] = useState(null)

    return(


        <LoadingContext.Provider value={{loading,setLoading, loadingMoreContent, setLoadingMoreContent }}>

            {props.children}
        </LoadingContext.Provider>
    )
}