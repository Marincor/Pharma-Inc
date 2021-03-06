import MenuAppBar from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./assets/css/reset.css";
import { PatientProvider } from "./contexts/patients";
import { LoadingProvider } from "./contexts/loading";
import Patient from "./components/Home/PatientInfo";
import { SearchBarProvider } from "./contexts/searchBar";
import { FilterProvider } from "./contexts/filter";
import Page404 from "./components/404/404";
function App() {
  return (
    <div>
      <LoadingProvider>
        <PatientProvider>
          <SearchBarProvider>
            <FilterProvider>
              <Router>
                <MenuAppBar />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/patient">
                    <Patient />
                  </Route>
                  <Page404/>
                </Switch>
              </Router>
            </FilterProvider>
          </SearchBarProvider>
        </PatientProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
