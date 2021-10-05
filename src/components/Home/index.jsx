import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { PatientContext } from "../../contexts/patients";
import { Box, Icon } from "./styles";
import Button from "@material-ui/core/Button";
import  user from '../../assets/img/user.svg'
import gender from '../../assets/img/gender.svg'
import birth from '../../assets/img/birth.svg'
import info from '../../assets/img/info.svg'
import Lottie from "react-lottie";
import { defaultOptions } from "./lottiesConfig";
import { LoadingContext } from "../../contexts/loading";

export default function Home() {
  const { loading, setLoading } = useContext(LoadingContext);
  const { data } = useContext(PatientContext);
  const { results, setResults } = useContext(PatientContext);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function renderContentTable() {
    if (data?.results && loading) {
      return (
        <div>
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      );
    } else if (data?.results) {
      return (
        <TableContainer component={Paper}>
          <Table size="small" aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell size="medium"> 
                <Icon src={user}/> Name 
                </TableCell>
                <TableCell size="medium" align="right">
                <Icon src={gender}/>
                  Gender
                </TableCell>
                <TableCell size="medium" align="right">
                <Icon src={birth}/>
                  Birth
                </TableCell>
                <TableCell size="medium" align="right">
                <Icon src={info}/>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {" "}
              {data?.results.map((row, index) => (
                <TableRow key={` ${index} - ${row.id.value}`}>
                  <TableCell component="th" scope="row">
                    {row.name.first} {row.name.last}
                  </TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">
                    {row.dob.date.substr(0, 10)}
                  </TableCell>
                  <TableCell align="right">
                    <Button color="primary">details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <Button color="primary" onClick={loadingMore}>
                {" "}
                loading more... <Icon src={loading} />
              </Button>
            </TableFooter>
          </Table>
        </TableContainer>
      );
    }
  }

  function loadingMore() {
    setResults(results + 50);
  }

  return (
    <Box bg="lightblue">
      <Box width="50vw" widthMob="95vw">
        {renderContentTable()}
      </Box>
    </Box>
  );
}
