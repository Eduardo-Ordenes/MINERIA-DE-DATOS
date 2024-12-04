import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav">
      <div className="nav-content">
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#conceptos" className="nav-link">Conceptos</a>
          <a href="#herramientas" className="nav-link">Herramientas</a>
          <a href="#recursos" className="nav-link">Recursos</a>
          <a href="#demostraciones" className="nav-link">Demostraciones</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;