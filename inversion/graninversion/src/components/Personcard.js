import React, { Component } from 'react';

const Personcard = props =>{
    
    const {firtName, lastName, ager, hairColor}=props;

    return (
        <div>
            <h1>{firstName},{lastName}</h1>
            <p>Age: {age} </p>
            <p>Hair Color: {hirColor} </p>
        </div>
    )
}

export default Personcard;