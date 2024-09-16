import React from 'react';
import './SignUp.css'; 
import backgroundImage from '../assets/h.jpg'; 

function SignUp() {
  return (
    <div className="signup-container">
        <img src={backgroundImage} alt="Background" className="background-image" />
        <div className="signup-form">
        <h1>Sign Up</h1>
        <form>
          <label>
            Tipo de usuario:
            <select>
              <option value="admin">Administrador</option>
              <option value="user">Usuario</option>
            </select>
          </label>
          <label>
            Nombre de usuario:
            <input type="text" name="username" 
            placeholder="Nombre de usuario"
            />
          </label>
          <label>
            Correo electrónico:
            <input type="email" name="email"
            placeholder="Correo electrónico"
            />
          </label>
          <label>
            Contraseña:
            <input type="password" name="password" 
            placeholder="Contraseña"
            />
          </label>
          <button type="submit">Crear cuenta</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
