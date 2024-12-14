import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false); 

  return (
    <nav className="nav">
      <div className="nav-content">
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#herramientas" className="nav-link" onClick={closeMenu}>Herramientas</a>
          <a href="#recursos" className="nav-link" onClick={closeMenu}>Recursos</a>
          <a href="#demostraciones" className="nav-link" onClick={closeMenu}>Repasos</a>
          <Link to="mineria/glosario" className="nav-link" onClick={closeMenu}>Glosario</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
