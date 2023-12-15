// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import SeriesList from './components/SeriesList';
import seriesData from './components/SeriesData';
import CarouselFadeExample from './components/CarouselFadeExample';
import Alert from 'react-bootstrap/Alert';

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar />
      </header>
      <div>
        <CarouselFadeExample />
      </div>
      <main className="container mt-3">
        <>
          {[
            'dark',
          ].map((variant) => (
            <Alert key={variant} variant={variant} className="text-black">
              Nuestros Proyectos BL
            </Alert>
          ))}
        </>
        <SeriesList dataSet="bl" />
        <>
          {[
            'dark',
          ].map((variant) => (
            <Alert key={variant} variant={variant} className="text-black">
              Nuestros Proyectos Tokusatsu
            </Alert>
          ))}
        </>
        <SeriesList dataSet="toku" />
        <>
          {[
            'dark',
          ].map((variant) => (
            <Alert key={variant} variant={variant} className="text-black">
              Nuestras Peliculas
            </Alert>
          ))}
        </>
        <SeriesList dataSet="movies" />
      </main>
    </div>
  );
}

export default App;
