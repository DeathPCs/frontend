import React, { useState } from 'react';
import './ForgotPassword.css'; 
import backgroundImage from '../assets/h.jpg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email enviado a:", email);
    setIsSubmitted(true); 
  };

  return (
    <div
      className="forgot-password-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {isSubmitted ? (
        <div className="success-message">
          <h2>¡Correo Enviado!</h2>
          <p>Hemos enviado un enlace para restablecer tu contraseña a tu correo electrónico.</p>
        </div>
      ) : (
        <div className="forgot-password-form">
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
