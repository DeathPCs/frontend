// Footer.jsx
import React from 'react';
import './Footer.css'; // Si estás usando CSS para estilos

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
      <ul className="footer-links">
        <li><a href="/about">Sobre nosotros</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><a href="/privacy">Política de privacidad</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
