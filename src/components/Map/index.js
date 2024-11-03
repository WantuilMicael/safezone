// MapSection.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import RegistroOcorrencia from '../RegistroOcorrencia'; // Importe o componente do popup
import './MapSection.css';

const MapSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const mapContainerStyle = {
    height: '400px',
    width: '100%',
  };

  const center = {
    lat: -22.9068, // Latitude do Rio de Janeiro
    lng: -43.1729, // Longitude do Rio de Janeiro
  };

  return (
    <div className='map-section'>
      <h2 className='map-title'>Mapa</h2>
      <div className='map-button'>
        <button onClick={togglePopup}>Registrar Ocorrência</button>
      </div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>

      <div className='map-info'>
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
      </div>

      {/* Exibir o popup quando `isPopupOpen` for verdadeiro */}
      {isPopupOpen && <RegistroOcorrencia onClose={togglePopup} />}
    </div>
  );
};

export default MapSection;
