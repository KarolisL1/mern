import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import Top_nav from './components/Top_nav';
import Side_nav from './components/Side_nav';
import Main from './components/Main';
import Sub_content from './components/Sub_content';
import Advertisement from './components/Advertisement';
import './components/Header.css';

function App() {
  return (
    <div className="app">
      <Container>
          <Top_nav />
          <Side_nav />
          <Main>
            <Sub_content />
            <Sub_content />
            <Sub_content />
            <Advertisement />
          </Main>
      </Container>
    </div>
  );
}

export default App;
