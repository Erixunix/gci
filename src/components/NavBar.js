// NavBar.js
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mi Aplicación</div>
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/clientes">Clientes</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
