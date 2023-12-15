// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './components/Navbar';
import SeriesList from './components/SeriesList';
import CarouselFadeExample from './components/CarouselFadeExample';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleRightClick = (e) => {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="App" onContextMenu={this.handleRightClick}>
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
        <Modal show={this.state.showModal} onHide={this.handleCloseModal} className="mi-modal">
          <Modal.Body className="mi-modal-content">
            <div className="mi-modal-header">
              <span className="mi-alerta-header">Alerta</span>
              <span className="mi-modal-close-btn" onClick={this.handleCloseModal}>
                &times;
              </span>
            </div>
            <p className="mi-alerta">No puedes hacer clic derecho en esta página</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
