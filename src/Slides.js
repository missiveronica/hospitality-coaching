import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import resort from './hotelPics/resort.jpg'
import cityhotel from './hotelPics/cityhotel.jpg'
import historichotel from './hotelPics/historichotel.jpg'


function Slides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='slideFrame' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img  src={resort} alt="resort"/>
        <Carousel.Caption>
          <h3>Luxury Resort</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={cityhotel} alt="hotel"/>
        <Carousel.Caption>
          <h3>City Hotel</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={historichotel} alt="hotel"/>
        <Carousel.Caption>
          <h3>Historic hotel</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;