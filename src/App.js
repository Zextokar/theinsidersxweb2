// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/Navbar';
import SeriesList from './components/SeriesList';
import seriesData from './components/SeriesData';

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar />
      </header>
      <main className="container mt-3">
        <SeriesList series={seriesData} />
      </main>
    </div>
  );
}

export default App;
