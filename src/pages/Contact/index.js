import React from 'react';
import './contact.css';

import Menu from '../../components/Menu'; // Importa o componente da Navbar
import Footer from '../../components/Rodape'; // Importa o componente do Rodapé

export default function Noticias() {
  return (
    <div className='contact-page'>
      {/* Navbar */}
      <Menu />

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
