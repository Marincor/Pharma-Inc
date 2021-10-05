import { createContext, useEffect, useState } from "react";
import PharmDataByPage from "../services/api";


export const PatientContext = createContext()

export const PatientProvider = (props) => {

    const [data, setData] = useState([])

    useEffect(()=>{

        PharmDataByPage().then(data => setData(data))

    }, [])

    return(

        <PatientContext.Provider value={{data, setData}}>
            {props.children}
        </PatientContext.Provider>
    )
}