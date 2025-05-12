import React, {useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/edentify.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

   }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className='navbar-logo'>
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo Clinică Stomatologică" />
        </NavLink>
      </div>

      <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`} ref={menuRef} onClick={closeMenu}>
        <li>
          <NavLink to="/" end>Acasă</NavLink>
        </li>
        <li>
          <NavLink to="/estetica-dentara">Estetica dentara si protetica</NavLink>
        </li>
        <li>
          <NavLink to="/dantura-fixa">Dantura fixa în 24H</NavLink>
        </li>
        <li>
          <NavLink to="/preturi">Prețuri</NavLink>
        </li>
        <li>
          <NavLink to="/despre-noi">Despre Noi</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;