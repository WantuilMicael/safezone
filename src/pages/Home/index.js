import './home.css';

import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

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

      <section className='news-section'>
        <h2 className='news-title'>Notícias</h2>
        <div className='cards-container'>
          <div className='news-card'>
            <h3 className='card-title'>Aprovada lei 4.986 contra arrastões</h3>
            <img className='card-image' src='noticias1.png' alt='Notícia 1' />
            <button className='card-button'>Clique aqui para ler mais</button>
          </div>
          <div className='news-card'>
            <h3 className='card-title'>
              A lei seca tem recordes de apreensões de veículos em 2023
            </h3>
            <img className='card-image' src='noticias2.png' alt='Notícia 2' />
            <button className='card-button'>Clique aqui para ler mais</button>
          </div>
          <div className='news-card'>
            <h3 className='card-title'>
              Consultar veículos apreendidos e recuperados
            </h3>
            <img className='card-image' src='noticias3.png' alt='Notícia 3' />
            <button className='card-button'>Clique aqui para ler mais</button>
          </div>
        </div>
      </section>

      <Menu />

      <Rodape />
    </div>
  );
}
