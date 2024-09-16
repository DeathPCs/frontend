import React from 'react';
import { Link } from 'react-router-dom'; 
import './WelcomeScreen.css'; 
import backgroundImage from '../assets/h.jpg'; 

function WelcomeScreen() {
  return (
    <div className="welcome-container">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <div className="content">
        <h1>New User</h1>
        <p>Bienvenido a.....</p>
        <div className="buttons">
          <p>¿Ya tienes cuenta? <Link to="/login">Haz click aquí.</Link></p> {/* Cambiado a Link */}
          <p>¿Aún no tienes cuenta? <Link to="/signup">Haz click aquí.</Link></p> {/* Cambiado a Link */}
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
