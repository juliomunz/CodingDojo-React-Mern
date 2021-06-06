import React, {useState} from 'react';
import axios from 'axios';


const Pokemones = () => {
    const [characters, setCharacters] = useState ([]);
    const [error, setError] = useState (false);

    const onClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response => {
            setCharacters(response.data.results)
        })
        .catch(error => {
            setError(true);
        }) 
    }

    return (
    <div>
        <button onClick={onClick}>Fetch Pokemones</button>
        
        {!error && <ul className="Pokemones">
            {characters? characters.map((item,index)=>{
                return (<li key={index}> {item.name} </li>)
            }):null
        }
        </ul>}
    </div>
);    
} 

export default Pokemones;