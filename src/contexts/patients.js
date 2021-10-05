import { createContext, useEffect, useState } from "react";
import PharmDataByPage from "../services/api";


export const PatientContext = createContext()

export const PatientProvider = (props) => {

    const [data, setData] = useState([])
    const [results, setResults] = useState(50)

    useEffect(()=>{

        PharmDataByPage(results).then(data => setData(data))

    }, [results])

    return(

        <PatientContext.Provider value={{data, setData, results, setResults}}>
            {props.children}
        </PatientContext.Provider>
    )
}