import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard fname="Jane" lname="Doe" age={45} hairColor="Black"/>
      <PersonCard fname="John" lname="Smith" age={88} hairColor="Brown"/>
      <PersonCard fname="Millard" lname="Fillmore" age={50} hairColor="Brown"/>
      <PersonCard fname="Maria" lname="Smith" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;
