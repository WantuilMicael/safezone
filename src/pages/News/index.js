import React from 'react';
import './news.css';

import Menu from '../../components/Menu'; // Importa o componente da Navbar
import Footer from '../../components/Rodape'; // Importa o componente do Rodapé

export default function Noticias() {
  return (
    <div className='noticias-page'>
      {/* Navbar */}
      <Menu />

      {/* Conteúdo da página de notícias */}
      <div className='noticias-content'>
        <h1>Notícias</h1>
        <div className='noticia'>
          <h2>Aprovada lei 4.986 contra arrastões</h2>
          <p>Detalhes sobre a nova legislação aprovada...</p>
        </div>
        <div className='noticia'>
          <h2>A lei seca tem recordes de apreensões de veículos em 2023</h2>
          <p>Informações sobre os recordes de apreensão de veículos...</p>
        </div>
        <div className='noticia'>
          <h2>Consultar veículos apreendidos e recuperados</h2>
          <p>Saiba mais sobre como consultar veículos apreendidos...</p>
        </div>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
