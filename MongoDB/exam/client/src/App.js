//import logo from './logo.svg';
import './App.css';
import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Pet Shelter</h1>
      <Switch>
        <Route exact path="/">
          <AllPets />
        </Route >
        <Route path="/pets/new">
          <NewPet />
        </Route>
        <Route path="/pets/:id/edit">
          <EditPet />
        </Route>
        <Route path="/pets/:id">
          <OnePet />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
