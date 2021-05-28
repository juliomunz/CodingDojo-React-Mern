import React, { useState } from 'react';
import './App.scss';
import Form from './components/Form';
import ClientProfile from './components/ClientProfile';

function App() {
  const [user, setUser] = useState({
        rut: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
  return (
    <div className="App">
      <Form user={user} setUser={setUser} />
      <ClientProfile user={user} setUser={setUser}  />
    </div>
  );
}

export default App;
