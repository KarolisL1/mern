// import logo from './logo.svg';
import './App.css';
// import Main from './Main';
import AllPerson from './components/AllPerson';
import PersonForm from './components/PersonForm';
import OnePerson from './components/OnePerson';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <PersonForm />
            <AllPerson />
          </Route>
          <Route exact path="/api/people/:_id">
            <OnePerson />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
