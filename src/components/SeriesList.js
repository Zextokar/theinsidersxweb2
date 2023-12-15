// src/SeriesList.js
import React, { useState } from 'react';
import { Card, Modal, Button, Row, Col } from 'react-bootstrap';
import { BsPlay } from 'react-icons/bs';
import './styles/SeriesList.css';

// Importa los conjuntos de datos
import { seriesDataBl, seriesDataToku } from './SeriesData';

const SeriesList = ({ dataSet }) => {
    // Selecciona el conjunto de datos basado en el prop dataSet
    const series = dataSet === 'bl' ? seriesDataBl : seriesDataToku;

    const [showModal, setShowModal] = useState(false);
    const [selectedSeries, setSelectedSeries] = useState(null);
    const [hoveredEpisode, setHoveredEpisode] = useState(null);
    const [showEpisodes, setShowEpisodes] = useState(false);

    const handleShowModal = (series) => {
        setSelectedSeries(series);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedSeries(null);
        setShowModal(false);
        setShowEpisodes(false); // Asegúrate de ocultar los episodios al cerrar el modal
    };

    const handleToggleEpisodes = () => {
        setShowEpisodes(!showEpisodes);
    };

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-center">
                {series.map((serie) => (
                    <Card
                        key={serie.id}
                        className="m-3 card-images"
                        style={{ width: '18rem', cursor: 'pointer' }}
                        onClick={() => handleShowModal(serie)}
                    >
                        <div style={{ position: 'relative' }}>
                            <Card.Img variant="top" src={serie.image} />
                            <div className="card-title-overlay" style={{ fontSize: '20px' }}>{serie.title}</div>
                        </div>

                    </Card>
                ))}
            </div>

            <Modal show={showModal} onHide={handleCloseModal} dialogClassName="netflix-modal" size="lg">
                <Modal.Header className="bg-dark">
                    <Modal.Title className="text-white">{selectedSeries && selectedSeries.title}</Modal.Title>
                    <Button
                        variant="secondary"
                        className="close-button"
                        onClick={handleCloseModal}
                    >
                        <span aria-hidden="true" className="text-white">&times;</span>
                    </Button>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#181c24' }}>
                    {selectedSeries && (
                        <>
                            <Row>
                                <Col md={12}>
                                    <Row>
                                        <Col md={6}>
                                            <div>
                                                <img
                                                    src={selectedSeries.image}
                                                    alt={selectedSeries.title}
                                                    className="modal-thumbnail img-fluid"
                                                    style={{
                                                        borderRadius: '5px',
                                                    }}
                                                />
                                                <div className="d-flex justify-content-center mt-2">
                                                    <i className="mx-2">{selectedSeries.numChapters} Capítulos</i>{' '}
                                                    <i className="mx-2">{selectedSeries.date}</i>{' '}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div>
                                                <p className="portada-descripcion mt-2">{selectedSeries.description}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <hr className="text-white" />
                            <i
                                variant="info"
                                onClick={handleToggleEpisodes}
                                className='allow'
                            >
                                {showEpisodes ? 'Ocultar Episodios' : 'Mostrar Episodios'}
                            </i>
                            <hr className="text-white" />
                            <Row>
                                {showEpisodes && selectedSeries.episodes.map((episode) => (
                                    <Col key={episode.number} md={12}>
                                        <Row className='modal-section'>
                                            <Col md={4}>
                                                <div
                                                    className='image-container'
                                                    onMouseEnter={() => setHoveredEpisode(episode.number)}
                                                    onMouseLeave={() => setHoveredEpisode(null)}
                                                >
                                                    <Card.Img className='image-portada' variant="top" src={episode.thumbnail} />
                                                    {hoveredEpisode === episode.number && (
                                                        <div className="play-icon-container">
                                                            <BsPlay className="play-icon" />
                                                        </div>
                                                    )}
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <Card.Body>
                                                    <Card.Title className="episode-title">Episodio {episode.number}</Card.Title>
                                                    <Card.Text className="episode-description">{episode.description}</Card.Text>
                                                </Card.Body>
                                            </Col>
                                            <Col md={2}>
                                                <Card.Text className='episode-duration'>{episode.duration}</Card.Text>
                                            </Col>
                                        </Row>
                                        <hr className="text-white" />
                                    </Col>
                                ))}
                            </Row>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default SeriesList;
