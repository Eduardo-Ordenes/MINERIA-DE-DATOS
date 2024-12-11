import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Navigation.css';

const NavigationForGraphsAndGlossary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Obtén la ubicación actual

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false); // Cierra el menú al hacer clic en un enlace

  const handleLinkClick = (path: string) => {
    if (location.pathname !== path) {
      closeMenu();
    }
  };

  return (
    <nav className="nav">
      <div className="nav-content">
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link
            to="/mineria"
            className={`nav-link ${location.pathname === '/mineria' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/mineria')}
          >
            Inicio
          </Link>
          <Link
            to="/mineria/graficos"
            className={`nav-link ${location.pathname === '/mineria/graficos' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/mineria/graficos')}
          >
            Ejercicio Practico
          </Link>
          <Link
            to="/mineria/glosario"  
            className={`nav-link ${location.pathname === '/mineria/glosario' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/mineria/glosario')}
          >
            Glosario
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationForGraphsAndGlossary;
