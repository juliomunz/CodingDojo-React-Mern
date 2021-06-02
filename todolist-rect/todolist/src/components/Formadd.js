import React, { useEffect, useContext, useState } from 'react';



const Formadd = (props) => {
    const [task, setTask] = useState({
        title: '',
    })
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className="form-container">
            <h1>Agregar nueva tarea</h1>
            <div className="card">
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Título de la tarea</label>
                    <input type="text" placeholder="Ingresa la tarea" name="titulo" value={task.title} onChange={(e) => setTask({...task,title:e.target.value})}/>
                    <button type="submit" disabled={error !== '' ? true : false}>Ingresar!</button>
                
                </form>    
            </div>          
        </div>
    )
}

export default Formadd;

