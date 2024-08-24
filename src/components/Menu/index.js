import './menu.css';
import { FaRegUser } from 'react-icons/fa';
import { Home } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src='../logo.png' alt='Logo' className='navbar-logo' />
        <ul className='nav-links'>
          <li>
            <a href='#inicio'>Início</a>
          </li>
          <li>
            <a href='#noticias'>Notícias</a>
          </li>
          <li>
            <a href='#quemsomos'>Quem Somos</a>
          </li>
          <li>
            <a href='#faleconosco'>Fale Conosco</a>
          </li>
        </ul>
      </div>
      <button className='login-button'>
        <FaRegUser className='user-icon' /> Entrar
      </button>
    </nav>
  );
}
