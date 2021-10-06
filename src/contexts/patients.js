import { createContext, useCallback, useEffect, useState } from "react";
import {PharmDataByPage, PharmDataById} from "../services/api";


export const PatientContext = createContext()

export const PatientProvider = (props) => {

    const [data, setData] = useState([])
    const [results, setResults] = useState(50)
    const [id, setId] = useState(50)
    const [currentPatient, setCurrentPatient] = useState()


    const fetchId = useCallback(()=>{

        PharmDataById(id).then(data => setCurrentPatient(data))

    }, [])

    useEffect(()=>{

        fetchId()
    
         PharmDataByPage(results).then(data => setData(data))

    }, [results])

    return(

        <PatientContext.Provider value={{data, setData, results, setResults, currentPatient, setCurrentPatient,id, setId}}>
            {props.children}
        </PatientContext.Provider>
    )
}