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
        <div className='noticia-card'>
          <img src='../noticias1.png' alt='Imagem notícia 1' />
          <div className='noticia-card-content'>
            <h2>Aprovada lei 4.986 contra arrastões</h2>
            <p>
              A Câmara dos Deputados aprovou ontem a lei 4.986 (26/04/2024), em
              sessão extraordinária, a lei que versa sobre a tipificação de
              crime de arrastão, ocorridos no Estado do Rio de Janeiro.
            </p>
          </div>
        </div>
        <div className='noticia-card'>
          <img src='../noticias2.png' alt='Imagem notícia 2' />
          <div className='noticia-card-content'>
            <h2>A lei seca tem recordes de apreensões de veículos em 2023</h2>
            <p>
              A Lei 11.705, conhecida como Lei Seca, foi aprovada em 2008 com o
              intuito de reduzir acidentes de trânsito gerados por motoristas
              que estão sob efeito do álcool.
            </p>
          </div>
        </div>
        <div className='noticia-card'>
          <img src='../noticias3.png' alt='Imagem notícia 3' />
          <div className='noticia-card-content'>
            <h2>Consultar veículos apreendidos e recuperados</h2>
            <p>
              Você pode consultar o local onde está guardado o veículo
              apreendido ou recuperado sob a tutela da Polícia Civil. No site do
              GOV.BR, existem todas as informações sobre o veículo.
            </p>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
