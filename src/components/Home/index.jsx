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
import { Box, Icon, Title } from "./styles";
import Button from "@material-ui/core/Button";
import  user from '../../assets/img/user.svg'
import gender from '../../assets/img/gender.svg'
import birth from '../../assets/img/birth.svg'
import info from '../../assets/img/info.svg'
import Lottie from "react-lottie";
import { defaultOptions, defaultOptions2 } from "./lottiesConfig";
import { LoadingContext } from "../../contexts/loading";
import {Link} from 'react-router-dom'

export default function Home() {
  const { loading, setLoading, loadingMoreContent, setLoadingMoreContent } = useContext(LoadingContext);
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
                 <Title>Name <Icon src={user} alt="name-icon" title="name"/></Title>  
                </TableCell>
                <TableCell size="medium" align="right">
                    <Title> 
                  Gender <Icon src={gender} alt="gender-icon" title="gender"/>
                    </Title>
                </TableCell>
                <TableCell size="medium" align="right">
                <Title> 
                  Birth<Icon src={birth} alt="birth-icon" title="birth"/>
                </Title>
                </TableCell>
                <TableCell size="medium" align="right">
                <Title> 
                  Actions<Icon src={info} alt="actions-icon" title="actions-info"/>
                </Title>
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
                  <TableCell align="left">{row.gender}</TableCell>
                  <TableCell align="left">
                    {row.dob.date.substr(0, 10)}
                  </TableCell>
                  <TableCell align="left">
                    <Button color="primary"><Link to='/patient'> details</Link></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <Button color="primary" onClick={loadingMore}>
                {" "}
                loading more {loadingMoreContent? 
                <div>
                <Lottie options={defaultOptions2} height={50} width={50} />
              </div> 
              :
              <span>🠗</span>
                } 
              </Button>
            </TableFooter>
          </Table>
        </TableContainer>
      );
    }
  }

  function loadingMore() {
    setResults(results + 50);
    setLoadingMoreContent(true) 
    setTimeout(() => {
        setLoadingMoreContent(false) 
    }, 2000);
  }

  return (
    <Box bg="lightblue">
      <Box width="65vw" widthMob="95vw">
        {renderContentTable()}
      </Box>
    </Box>
  );
}
