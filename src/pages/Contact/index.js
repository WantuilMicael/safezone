import React from 'react';
import './contact.css';

import Menu from '../../components/Menu'; // Importa o componente da Navbar
import Footer from '../../components/Rodape'; // Importa o componente do Rodapé

export default function Contact() {
  return (
    <div className='contact-page'>
      {/* Navbar */}
      <Menu />

      {/* Conteúdo principal */}
      <div className='contact-content'>
        {/* Título separado */}
        <div className='contact-title'>
          <h1>Fale Conosco</h1>
        </div>

        {/* Formulário */}
        <form className='contact-form'>
          <label htmlFor='name'>Nome:</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Digite seu nome'
          />

          <label htmlFor='email'>E-mail:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Digite seu e-mail'
          />

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='city'>Cidade:</label>
              <input
                type='text'
                id='city'
                name='city'
                placeholder='Digite sua cidade'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='state'>Estado:</label>
              <input
                type='text'
                id='state'
                name='state'
                placeholder='Digite seu estado'
              />
            </div>
          </div>

          <label htmlFor='message'>Mensagem:</label>
          <textarea
            id='message'
            name='message'
            placeholder='Digite sua mensagem'
          ></textarea>

          <button type='submit'>Enviar</button>
        </form>
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
