import React, { useState } from 'react';
import './Login.css';  

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el inicio de sesión aquí
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Log In</h2>
        <div>
          <label>Usuario:</label>
          <input 
            type="text" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)} 
            placeholder="Nombre de Usuario" 
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Ingresa tu contraseña" 
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <div className="forgot-password">
          <a href="/forgot-password">Olvidé mi contraseña</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
