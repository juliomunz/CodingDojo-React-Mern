import './App.css';
import Personcard from './components/Personcard'

function App() {
  return (
    <div className="App">
      <Personcard firstName="Jane" lastName="Doe" age={45} hairColor='Black' />
      <Personcard firstName="John" lastName="Smith" age={40} hairColor='Red' />
      <Personcard firstName="Julio" lastName="Muñoz" age={38} hairColor='Brown' />
      <Personcard firstName="Nicole" lastName="Henriquez" age={33} hairColor='Blond' />
    </div>
  );
}

export default App;
