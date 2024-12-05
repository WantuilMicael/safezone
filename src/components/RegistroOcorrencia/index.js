// RegistroOcorrencia.js
import React, { useState } from 'react'; // Importa useState
import { IoIosCloseCircle } from 'react-icons/io'; // Importa o ícone
import './RegistroOcorrencia.css';

const RegistroOcorrencia = ({ onClose }) => {
  const [selectOpen, setSelectOpen] = useState(false); // Estado para controlar se o select está aberto
  const [selectedOption, setSelectedOption] = useState(''); // Estado para controlar a opção selecionada

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Atualiza a opção selecionada
    setSelectOpen(false); // Fecha o select após a seleção
  };

  return (
    <div className='popup-overlay'>
      <div className='popup'>
        <button className='close-button' onClick={onClose}>
          <IoIosCloseCircle size={30} />
        </button>
        <h2 className='popup-title'>Registro de Ocorrência</h2>

        <div className='popup-content'>
          <div className='input-row'>
            <div className='input-group'>
              <label>CEP</label>
              <input type='text' placeholder='Ex: 12.345-678' />
            </div>

            <div className='input-group address-input'>
              <label>Endereço</label>
              <input type='text' placeholder='Rua, Avenida, etc.' />
            </div>
          </div>

          <div className='input-row-triple'>
            <div className='input-group'>
              <label>Bairro</label>
              <input type='text' placeholder='Nome do bairro' />
            </div>

            <div className='input-group'>
              <label>Município</label>
              <input type='text' placeholder='Cidade' />
            </div>

            <div className='input-group'>
              <label>Estado</label>
              <input type='text' placeholder='UF' maxLength={2} />
            </div>
          </div>

          <div className='input-row'>
            <div className='input-group'>
              <label>Tipo de Ocorrência</label>
              <select
                onFocus={() => setSelectOpen(true)} // Define que o select está aberto
                onBlur={() => setSelectOpen(false)} // Define que o select não está mais aberto
                onChange={handleSelectChange} // Lida com a mudança de seleção
                className={selectOpen ? 'select-open' : ''} // Aplica a classe ao select se estiver aberto
                style={{ color: selectedOption ? 'white' : 'white' }} // Altera a cor do texto baseado na seleção
                placeholder='Selecione...' // Adiciona um placeholder ao select
              >
                <option value=''>Selecione...</option>
                <option value='Roubo'>Roubo</option>
                <option value='Furto'>Furto</option>
                <option value='Sequestro'>Sequestro</option>
                <option value='Outros'>Outros</option>
              </select>
            </div>
          </div>

          <div className='input-row'>
            <div className='input-group'>
              <label>Descrição da Ocorrência</label>
              <textarea placeholder='Descreva a ocorrência'></textarea>
            </div>
          </div>

          <button className='register-button'>Registrar</button>
        </div>
      </div>
    </div>
  );
};

export default RegistroOcorrencia;
