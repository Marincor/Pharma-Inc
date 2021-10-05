import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { PatientContext } from "../../contexts/patients";
import { Box } from "./styles";
import Button from '@material-ui/core/Button';

export default function Home () {

  const {data} = useContext(PatientContext)
 



function renderContentTable() {

    if(data?.results) {

        return(  
            <> 
            {data?.results.map((row, index) => (
                <TableRow key={row.id.value && index}>
            <TableCell component="th" scope="row">
              {row.name.first }  {row.name.last }
            </TableCell>
            <TableCell align="right">{row.gender}</TableCell>
            <TableCell align="right">{row.dob.date.substr(0,10)}</TableCell>
            <TableCell align="right"><Button  color='primary'>details</Button></TableCell>
          </TableRow>
        ))} 
        </>
        )
    }

    else {

        return false
    }
}
    console.log(data.results)
    return(
<Box bg='lightblue'> 

        <Box width='50vw' widthMob="95vw" >
            
            <TableContainer component={Paper}>
      <Table size='small'  aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell size="medium" >Name</TableCell>
            <TableCell size="medium" align="right">Gender</TableCell>
            <TableCell size="medium" align="right">Birth</TableCell>
            <TableCell size="medium" align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {renderContentTable()}
        </TableBody>
      </Table>
    </TableContainer>

        </Box>
          </Box>
    )
}