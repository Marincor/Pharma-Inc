import MenuAppBar from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./assets/css/reset.css";
import { PatientProvider } from "./contexts/patients";
import { LoadingProvider } from "./contexts/loading";
import Patient from "./components/Home/PatientInfo";
import { SearchBarProvider } from "./contexts/searchBar";
function App() {
  return (
    <div>
      <LoadingProvider>
        <PatientProvider>
          <SearchBarProvider> 
          <Router>
            <MenuAppBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/patient"> 

                <Patient />
              </Route>
            </Switch>
          </Router>
          </SearchBarProvider>
        </PatientProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
