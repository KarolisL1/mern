// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Hello from './components/Hello';
import Api from './components/Api';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Hello />
      <Switch>
        <Route exact path="/:type/:id">
          <Api />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
