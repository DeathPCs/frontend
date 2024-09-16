import React from 'react';
import './Header.css'; 
import logo from '../assets/a.jpg';

const Header = () => {
  return (
    <header className="site-header">
       <img src={logo} alt="Logo del sitio web" className="site-logo" />

      <nav>
      </nav>
    </header>
  );
};

export default Header;
