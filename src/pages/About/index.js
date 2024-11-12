import './about.css';

import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';

export default function Home() {
  return (
    <div className='container-home'>
      <Menu />

      {/* Título Quem Somos acima da seção */}
      <div className='quem-somos-titulo'>
        <h1>Quem Somos</h1>
      </div>

      {/* Seção Quem Somos */}
      <div className='quem-somos'>
        <p>
          Somos pessoas preocupadas com o crescimento e desenvolvimento da
          sociedade. Queremos entender este fenômeno social e como nossa
          interação digital possa ajudar neste processo. Pensamos em dar voz às
          vozes caladas pela opressão de grupos que trazem num novo conceito de
          poder (à margem da lei), e do próprio Estado que comete abusos, mas
          que também encontra meios de não ter ampla divulgação. Este espaço é
          democrático e se vale da presunção de que a liberdade de expressão é
          um instrumento de construção e não um projeto de interesse particular
          ou de único grupo.
        </p>

        {/* Imagem abaixo da seção Quem Somos */}
        <img
          src='../riodejaneirocristo.jpg'
          alt='Imagem que representa quem somos'
          className='quem-somos-img'
        />
      </div>

      <Rodape />
    </div>
  );
}
