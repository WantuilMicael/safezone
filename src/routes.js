import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Noticias from './pages/News';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/noticias' element={<Noticias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
