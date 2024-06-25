import React, { useState } from 'react';
import './BarraLateral.css';
import Clientes from './Clientes';

const BarraLateral = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li className={activeIndex === 0 ? 'active' : ''}>
          <a href="#seguridad" onClick={() => handleToggle(0)}>Seguridad</a>
          <ul className={`sub-links ${activeIndex === 0 ? 'show' : ''}`}>
            <li><a href="#sub1">Subapartado 1</a></li>
            <li><a href="#sub2">Subapartado 2</a></li>
          </ul>
        </li>
        <li className={activeIndex === 1 ? 'active' : ''}>
          <a href="#facturacion" onClick={() => handleToggle(1)}>Facturación</a>
          <ul className={`sub-links ${activeIndex === 1 ? 'show' : ''}`}>
            <li><a href="./Clientes.js">Contacto</a></li>
            <li><a href="#sub2">Subapartado 2</a></li>
          </ul>
        </li>
        <li className={activeIndex === 2 ? 'active' : ''}>
          <a href="#logistica" onClick={() => handleToggle(2)}>Logística</a>
          <ul className={`sub-links ${activeIndex === 2 ? 'show' : ''}`}>
            <li><a href="#sub1">Subapartado 1</a></li>
            <li><a href="#sub2">Subapartado 2</a></li>
          </ul>
        </li>
        <li className={activeIndex === 3 ? 'active' : ''}>
          <a href="#tesoreria" onClick={() => handleToggle(3)}>Tesorería</a>
          <ul className={`sub-links ${activeIndex === 3 ? 'show' : ''}`}>
            <li><a href="#sub1">Subapartado 1</a></li>
            <li><a href="#sub2">Subapartado 2</a></li>
          </ul>
        </li>
        <li className={activeIndex === 4 ? 'active' : ''}>
          <a href="#ajustes" onClick={() => handleToggle(4)}>Ajustes</a>
          <ul className={`sub-links ${activeIndex === 4 ? 'show' : ''}`}>
            <li><a href="#sub1">Subapartado 1</a></li>
            <li><a href="#sub2">Subapartado 2</a></li>
          </ul>
        </li>
        <li className={activeIndex === 5 ? 'active' : ''}>
          <a href="#reportes" onClick={() => handleToggle(5)}>Reportes</a>
          <ul className={`sub-links ${activeIndex === 5 ? 'show' : ''}`}>
            <li><a href="#sub1">Subapartado 1</a></li>
            <li><a href="#sub2">Subapartado 2</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default BarraLateral;
