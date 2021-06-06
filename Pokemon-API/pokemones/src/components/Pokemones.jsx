import React, {useState} from 'react';

const Pokemones = () => {
    const [poke, setPoke] = useState ([]);
    const [error, setError] = useState (false);

    const onClick = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response.results);
            setError(false);
            setPoke(response.results)
        })
        .catch(error => {
            setError(true);
        }) 
    }
    
return (
    <div>
        <button onClick={onClick}>MOSTRAR POKEMONES</button>
        
        {!error && <ul className="Pokemones">
            {poke? poke.map((item,index)=>{
                return (<li key={index}> {item.name} </li>)
            }):null
        }
        </ul>}
    </div>
);    
} 



export default Pokemones;