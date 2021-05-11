import logo from './logo.svg';
import './App.css';

function App() {
  const mivar = 'hola compañeros'
  const boton = () => alert('chao')
  return (
    <div className="App">
    <p>{mivar}</p>
    <button onClick={boton}> primer boton</button>
    </div>
  );
}

export default App;
