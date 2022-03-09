import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard fname="Jane" lname="Doe" age="45" color="Black"/>
      <PersonCard fname="John" lname="Smith" age="88" color="Brown"/>
    </div>
  );
}

export default App;
