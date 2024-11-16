import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Noticias from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/quemsomos' element={<About />} />
        <Route path='/faleconosco' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
