import './App.css';
import Personcard from './components/Personcard';

function App() {
  return (
    <div className="App">
        <Personcard firstName="Julio" lastName="Muñoz" age={37} hairColor='Black'   />
        <Personcard firstName="Jorge" lastName="Gonzalez" age={38} hairColor='Gold'   />
        <Personcard firstName="Jhonny" lastName="Valdivia" age={39} hairColor='Brown'   />
        <Personcard firstName="Patricio" lastName="Jimenez" age={49} hairColor='Blue'   />
    </div>
  );
}

export default App;
