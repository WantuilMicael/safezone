import './home.css';

import Menu from '../../components/Menu';

export default function Home() {
  return (
    <div className='container-home'>
      <section className='content-section'>
        <h2>Motivação</h2>
        <p>
          O zoneamento urbano é um instrumento fundamental para desenvolvimento
          de políticas públicas, na área da Segurança Pública. O mapeamento da
          Mancha Criminal, em tempo real, imprime o instante da ocorrência,
          contextualizando-a e dá visão do comportamento deste evento social,
          possibilitando sua prevenção.
        </p>
      </section>

      <section className='map-section'>
        <h2 className='map-title'>Mapa</h2>
        <button className='register-button'>Registrar Ocorrência</button>
        <img src='../mapa.png' alt='Mapa' className='map-image' />
        <div className='tables-container'>
          <div className='table'>
            <div className='table-row'>
              <div className='table-cell'>Total de registros</div>
            </div>
            <div className='table-row second-row'>
              <div className='table-cell'>1.683</div>
            </div>
          </div>
          <div className='table'>
            <div className='table-row'>
              <div className='table-cell'>
                População do estado do Rio de Janeiro
              </div>
            </div>
            <div className='table-row second-row'>
              <div className='table-cell'>16.054.524</div>
            </div>
          </div>
          <div className='table'>
            <div className='table-row'>
              <div className='table-cell'>Eventos por habitantes (%)</div>
            </div>
            <div className='table-row second-row'>
              <div className='table-cell'>1,4%</div>
            </div>
          </div>
        </div>
      </section>

      <Menu />
    </div>
  );
}
