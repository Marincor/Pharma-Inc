
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useContext, useEffect, useState } from 'react';
import { PatientContext } from '../../../contexts/patients';
import { SearchBarContext } from '../../../contexts/searchBar';

export default function SearchBar() {

    const { data } = useContext(PatientContext);
    const {value, setValue, contentBar, setContentBar} = useContext(SearchBarContext)

    useEffect(()=>{

        const arr = contentBar || []
        data.results.map((item) =>{

            arr.push(`${item.name.first} ${item.name.last}`)
            setContentBar(arr)
        })

        

    }, [])

  return (
    <Autocomplete
    value={value}
    onChange={(event, newValue) => {
     
      setValue(newValue);
    }}
      disablePortal
      id="combo-box-demo"
      options={contentBar}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField  {...params} label="Name" />}
    />
  );
}

