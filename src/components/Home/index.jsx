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
import { useContext, useEffect } from "react";
import { PatientContext } from "../../contexts/patients";
import { Box, BoxContainer, BtnFilter, Icon, Title } from "./styles";
import Button from "@material-ui/core/Button";
import user from "../../assets/img/user.svg";
import gender from "../../assets/img/gender.svg";
import birth from "../../assets/img/birth.svg";
import info from "../../assets/img/info.svg";
import Lottie from "react-lottie";
import { defaultOptions, defaultOptions2 } from "./lottiesConfig";
import { LoadingContext } from "../../contexts/loading";
import { useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";
import { SearchBarContext } from "../../contexts/searchBar";
import { FilterContext } from "../../contexts/filter";
import filterIcon from "../../assets/img/filter.svg";
import loadingMore from "../../functions/loadingMore";
import getUser from "../../functions/getUser";

export default function Home() {
  const { loading, setLoading, loadingMoreContent, setLoadingMoreContent } =
    useContext(LoadingContext);
  const { data, results, setResults, setId, setCurrentPatient } =
    useContext(PatientContext);
  const { currentGender, setCurrentGender } = useContext(FilterContext);
  const { value } = useContext(SearchBarContext);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  const filteredPatients = () => {
    if (value) {
      return data.results?.filter(
        (atribute) => `${atribute.name.first} ${atribute.name.last}` === value
      );
    } else if (currentGender) {
      const gender = data?.results?.filter((o) => o.gender === currentGender);
      let result = gender[0];
      for (let obj of gender) {
        if (obj.dob.age < result.dob.age) {
          result = obj;
        }
      }

      return gender;
    } else {
      return data.results;
    }
  };
  filteredPatients()?.sort(function (a, b) {
    return a.name.first < b.name.first
      ? -1
      : a.name.first > b.name.first
      ? 1
      : 0;
  });

  function filterGender() {
    if (currentGender === null) {
      setCurrentGender("female");
    } else if (currentGender === "female") {
      setCurrentGender("male");
    } else {
      setCurrentGender(null);
    }
  }

  function renderContentTable() {
    if (data?.results && loading) {
      return (
        <div>
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      );
    } else if (data?.results) {
      return (
        <BoxContainer>
          <SearchBar />
          <TableContainer component={Paper}>
            <Table size="small" aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell data-cy="name" size="medium">
                    <Title>
                      Name <Icon src={user} alt="name-icon" title="name" />
                    </Title>
                  </TableCell>
                  <TableCell data-cy="gender" size="medium" align="right">
                    <Title>
                      <BtnFilter onClick={filterGender}>
                        <Icon
                          src={filterIcon}
                          alt="filter-icon"
                          title="filter by gender"
                        />
                      </BtnFilter>{" "}
                      Gender{" "}
                      <Icon src={gender} alt="gender-icon" title="gender" />
                    </Title>
                  </TableCell>
                  <TableCell data-cy="birth" size="medium" align="right">
                    <Title>
                      Birth
                      <Icon src={birth} alt="birth-icon" title="birth" />
                    </Title>
                  </TableCell>
                  <TableCell data-cy="actions" size="medium" align="right">
                    <Title>
                      Actions
                      <Icon
                        src={info}
                        alt="actions-icon"
                        title="actions-info"
                      />
                    </Title>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredPatients().map((row, index) => (
                  <TableRow key={` ${index} - ${row.id.value}`}>
                    <TableCell data-cy="nameValue" component="th" scope="row">
                      {row.name.first} {row.name.last}
                    </TableCell>
                    <TableCell data-cy="genderValue" align="left">
                      {row.gender}
                    </TableCell>
                    <TableCell data-cy="dateValue" align="left">
                      {row.dob.date.substr(0, 10)}
                    </TableCell>
                    <TableCell data-cy="actionValue" align="left">
                      <Button
                      variant="contained"
                      size="small"
                        data-cy="btnDetail"
                        color="primary"
                        onClick={() => {
                          getUser(
                            row.id.value,
                            `${row.name.first} ${row.name.last}`,
                            row.email,
                            row.gender,
                            row.dob.date.substr(0, 10),
                            row.phone,
                            row.nat,
                            row.location,
                            row.picture.large,
                            setId,
                            setCurrentPatient,
                            history
                          );
                        }}
                      >
                        details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <Button
                  data-cy="loadingMore"
                  color="primary"
                  onClick={() => {
                    loadingMore(setResults, results, setLoadingMoreContent);
                  }}
                >
                  {" "}
                  loading more{" "}
                  {loadingMoreContent ? (
                    <div>
                      <Lottie
                        options={defaultOptions2}
                        height={50}
                        width={50}
                      />
                    </div>
                  ) : (
                    <span>????</span>
                  )}
                </Button>
              </TableFooter>
            </Table>
          </TableContainer>
        </BoxContainer>
      );
    }
  }

  return (
    <Box bg="lightblue">
      <Box width="65vw" widthMob="95vw">
        {renderContentTable()}
      </Box>
    </Box>
  );
}
