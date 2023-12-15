import Carousel from 'react-bootstrap/Carousel';
import './styles/carousel.css';

function CarouselFadeExample() {
  return (
    <Carousel fade className="carousel-container">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/DenjiSentaiMegaranger/Poster.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/BarrerasDelCorazon/Poster.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/MySchoolPresident/Poster.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
