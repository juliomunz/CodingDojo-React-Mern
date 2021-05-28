import React, { useState, useEffect } from 'react';
import './components.scss'
const Form = (props) => {
    const { user, setUser } = props;
    const { password, confirmPassword } = user;
    const [error, setError] = useState('');

    console.log(user)

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("🚀 ~ file: Form.js ~ line 16 ~ onSubmit ~ e", user)

    }

    const setFormValues = (e) => {
        console.log("🚀 ~ file: Form.js ~ line 18 ~ setFormValues ~ e", e.target.name)
        if (e.target.name === 'rut') {
            const rutRegex = /^[0-9]{8,9}[-|‐]{1}[0-9kK]{1}$/;
            rutRegex.test(e.target.value) ? setError('') : setError('*Favor Ingresar rut con el formato 11111111-1');
        }
        setUser({ ...user, [e.target.name]: e.target.value })

    }

    const validateEqualityInpassword = () => {
        password === confirmPassword ? setError('') : setError('*Contraseñas deben coincidir');
    }

    useEffect(() => {
        validateEqualityInpassword()
    }, [password, confirmPassword])

    return (
        <div className="form-container">
            <h1>Login</h1>
            <div className="card">
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Rut:</label>
                    <input type="text" placeholder="Ingresa tu rut" name="rut" value={user.rut} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Nombre completo:</label>
                    <input type="text" placeholder="Ingresa tu nombre completo" name="fullName" value={user.fullName} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Correo electrónico:</label>
                    <input type="text" placeholder="Ingresa tu correo electrónico" name="email" value={user.email} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" placeholder="Ingresa tu contraseña" name="password" value={user.password} onChange={(e) => setFormValues(e)} />
                    <label htmlFor="">Confirma contraseña:</label>
                    <input type="password" placeholder="Confirma tu contraseña" name="confirmPassword" value={user.confirmPassword} onChange={(e) => setFormValues(e)} />
                    <button type="submit" disabled={error !== '' ? true : false}>Login!</button>
                </form>
                <p className="error-message">{error}</p>

            </div>

        </div>
    )
}

export default Form;