import './menu.css';

export default function Menu() {
  return (
    <div className='menu'>
      <div className='logo-menu'>
        <img src='/Logo.png' />
      </div>

      <div className='menu-item'>
        <ul>
          <li>
            <a href='default.asp'>Inicio</a>
          </li>
          <li>
            <a href='news.asp'>Notícias</a>
          </li>
          <li>
            <a href='contact.asp'>Quem somos</a>
          </li>
          <li>
            <a href='about.asp'>Fale Conosco</a>
          </li>
        </ul>
      </div>

      <div>
        <button className='entrar'>Entrar</button>
      </div>
    </div>
  );
}
