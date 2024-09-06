import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';

import Login from '../Login';

import './menu.css';

const Menu = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Corrigido para alternar o estado booleano
  };

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src='../logo.png' alt='Logo' className='navbar-logo' />
        <ul className='nav-links'>
          <li>
            <Link to='/'>Início</Link>
          </li>
          <li>
            <Link to='/noticias'>Notícias</Link>
          </li>
          <li>
            <a href='#quemsomos'>Quem Somos</a>
          </li>
          <li>
            <a href='#faleconosco'>Fale Conosco</a>
          </li>
        </ul>
      </div>
      <button className='login-button' onClick={togglePopup}>
        <FaRegUser className='user-icon' /> Entrar
      </button>

      {/* Renderiza o componente Login apenas se isPopupOpen for true */}
      {isPopupOpen && <Login closePopup={togglePopup} />}
    </nav>
  );
};

export default Menu;
