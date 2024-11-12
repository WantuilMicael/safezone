import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Noticias from './pages/News';
import About from './pages/About';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/quemsomos' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
