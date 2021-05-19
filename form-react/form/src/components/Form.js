import React from 'react';
import '/components.scss'
const Form = () => {

    const [user, setUser]= useState({
        rut:'',
        fullName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    //console.log(user)
    const setFormValues = (e) => {
        setUser ({...user,[e.target.name]: e.target.value})
    }

    return (
        <div class Name = "form-container">
            <h1>Login</h1>
            <div className="card">
                <form>
                    <label htmlFor="">RUT:</label>
                    <input type="text" placeholder="Ingresa tu rut" name="rut" value={user.rut} onChange={(e) => setUser ({...user, [e.target.name]: e.target.value})}/>
                    <label htmlFor="">Nombre completo:</label>
                    <input type="text" placeholder="Ingresa tu nombre" name="fullName" value={user.fullName} onChange={(e) => setUser ({...user, [e.target.name]: e.target.value})}/>
                    <label htmlFor="">Correo Eléctronico:</label>
                    <input type="text" placeholder="Ingresa tu nombre" name="email" value={user.email} onChange={(e) => setUser ({...user, [e.target.name]: e.target.value})}/>
                    </form>
            </div>
        </div>
    )
}