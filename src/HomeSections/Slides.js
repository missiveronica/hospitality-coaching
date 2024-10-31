import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import resort from '../Assets/hotelPics/resort.jpg';
import cityhotel from '../Assets/hotelPics/cityhotel.jpg';
import historichotel from '../Assets/hotelPics/historichotel.jpg';
import lifestylehotel from '../Assets/hotelPics/lifestyle.avif';


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
          <h3 className='slideTitle'>Luxury Resort</h3>
          <p className='slideText'>Are you a beach person? Get experience in the sunny side of life</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={cityhotel} alt="hotel"/>
        <Carousel.Caption>
          <h3 className='slideTitle'>City Hotel</h3>
          <p className='slideText'>Bustle and hustle is about you? Get into the hectic of a city life hotel</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={historichotel} alt="hotel"/>
        <Carousel.Caption>
          <h3 className='slideTitle'>Historic hotel</h3>
          <p className='slideText'>
            Are you into history and culture? Get to know the mysteries of the legendary property.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={lifestylehotel} alt="hotel"/>
        <Carousel.Caption>
          <h3 className='slideTitle'>Lifetyle hotel</h3>
          <p className='slideText'>
            Is modern style closer to your personality? Get into the flow with a lifestyle property.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;