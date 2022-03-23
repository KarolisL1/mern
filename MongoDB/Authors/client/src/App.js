//import logo from './logo.svg';
import './App.css';
import AllAuthors from './components/AllAuthors';
import AuthorsForm from './components/AuthorsForm';
import EditAuthor from './components/EditAuthor';
import OneAuthor from './components/OneAuthor';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <AllAuthors />
          </Route>
          <Route exact path="/new">
            <AuthorsForm />
          </Route>
          <Route exact path="/edit/:id">
            <EditAuthor />
          </Route>
          <Route exact path="/author/:id">
            <OneAuthor />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
