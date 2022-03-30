// import logo from './logo.svg';
import './App.css';
// import Main from './Main';
import React, { useState } from 'react';
import AllPerson from './components/AllPerson';
import PersonForm from './components/PersonForm';
import OnePerson from './components/OnePerson';
import UpdatePerson from './components/UpdatePerson';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <PersonForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}/>
            <AllPerson formSubmitted = {formSubmitted}/>
          </Route>
          <Route exact path="/people/:_id">
            <OnePerson />
          </Route>
          <Route path="/people/:id/edit">
            <UpdatePerson />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
