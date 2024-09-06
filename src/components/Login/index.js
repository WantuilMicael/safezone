import React, { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import './login.css';

const Login = ({ closePopup }) => {
  const [activeTab, setActiveTab] = useState('login'); // Gerencia abas 'login' e 'cadastrar'

  return (
    <div className='popup-overlay'>
      <div className='popup'>
        <button className='close-button' onClick={closePopup}>
          <IoIosCloseCircle className='close-icon' /> {/* Ícone para fechar */}
        </button>
        {/* <h2>SafeZone</h2>*/}
        <div className='tabs'>
          <button
            className={activeTab === 'login' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('login')}
          >
            Entrar
          </button>
          <button
            className={activeTab === 'register' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('register')}
          >
            Cadastrar
          </button>
        </div>
        <div className='tab-content'>
          {activeTab === 'login' ? (
            <div className='login-fields'>
              <label>Usuário E-mail</label>
              <input type='email' placeholder='Digite seu e-mail' />
              <label>Senha</label>
              <input type='password' placeholder='Digite sua senha' />
              <button className='login-submit'>Entrar</button>
            </div>
          ) : (
            <div className='register-fields'>
              <label>Usuário E-mail</label>
              <input type='email' placeholder='Digite seu e-mail' />
              <label>Nome completo</label>
              <input type='text' placeholder='Digite seu nome completo' />
              <label>Senha</label>
              <input type='password' placeholder='Digite sua senha' />
              <label>Confirmar Senha</label>
              <input type='password' placeholder='Confirme sua senha' />
              <button className='register-submit'>Cadastrar</button>
            </div>
          )}
        </div>
        <a href='#' className='forgot-password-link'>
          Esqueceu sua senha?
        </a>
      </div>
    </div>
  );
};

export default Login;
