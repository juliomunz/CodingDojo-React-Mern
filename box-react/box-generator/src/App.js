import BoxForm from './components/BoxForm';
import Results from './components/Results';
import './App.css';
import React, {useState} from "react";

function App() {


  const [boxes,setBoxes]=useState([]);

  return (
    <div className="App">
      <BoxForm boxes={boxes} setBoxes={setBoxes} />
      <Results data={boxes} />
    </div>
  );
}

export default App;