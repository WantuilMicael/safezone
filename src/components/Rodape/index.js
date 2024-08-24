import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-section left-section'>
        <h3 className='footer-title'>Acessos</h3>
        <ul className='footer-links'>
          <li>
            <a href='/quem-somos'>Quem Somos</a>
          </li>
          <li>
            <a href='/publicacoes'>Publicações</a>
          </li>
          <li>
            <a href='/fale-conosco'>Fale Conosco</a>
          </li>
          <li>
            <a href='/apoio'>Apoio</a>
          </li>
        </ul>
      </div>

      <div className='footer-section center-section'>
        <p className='footer-text'>
          Esta é uma iniciativa de promoção do desenvolvimento da sociedade no
          combate ao crime, dando visibilidade aos estes eventos sociais não
          observados pelas autoridades de forma mais célere e abrangente.
        </p>
        <p className='footer-text'>
          Buscamos sempre subsidiar as políticas públicas, garantindo o
          anonimato dos contribuintes e compartilhando as informações em tempo
          real.
        </p>
        <hr className='footer-divider' />
        <p className='footer-copyright'>Safe Zone - Copyright © 2024</p>
      </div>

      <div className='footer-section right-section'>
        <h3 className='footer-title'>Links Úteis</h3>
        <ul className='footer-links'>
          <li>
            <a
              href='https://www.policiacivilrj.net.br'
              target='_blank'
              rel='noopener noreferrer'
            >
              Polícia Civil RJ
            </a>
          </li>
          <li>
            <a
              href='https://www.policiamilitar.rj.gov.br'
              target='_blank'
              rel='noopener noreferrer'
            >
              Polícia Militar RJ
            </a>
          </li>
          <li>
            <a
              href='https://www.gov.br/pf/pt-br'
              target='_blank'
              rel='noopener noreferrer'
            >
              Polícia Federal
            </a>
          </li>
          <li>
            <a
              href='https://www.gov.br/mdh/pt-br/assuntos/violencia-contra-as-mulheres/delegacia-da-mulher'
              target='_blank'
              rel='noopener noreferrer'
            >
              Delegacia da Mulher
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
