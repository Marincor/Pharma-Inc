import MenuAppBar from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/Home";
import './assets/css/reset.css'
import { PatientProvider } from "./contexts/patients";
function App() {
  return (
    <div >
      <PatientProvider> 

      <Router>
           <MenuAppBar />
           <Switch>
            <Route exact path='/'> 
              <Home />
            </Route>


           </Switch>
         </Router>
      </PatientProvider>
    </div>
  );
}

export default App;
