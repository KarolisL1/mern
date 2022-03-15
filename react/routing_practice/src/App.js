import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home";
import Number from "./Components/Number";
import Long from "./Components/Long";

function App() {

  return (

    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/">Home</Link>
        | 
        {/* <Link to="/">Number</Link> */}
        |
        <Link to="/about">About</Link>
      </p>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:number">
          <Number />
        </Route>
        {/* <Route exact path="/:"><Hello /></Route> */}
        <Route path="/:word/:text/:background"><Long /></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
