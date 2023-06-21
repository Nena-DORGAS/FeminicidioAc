import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarrosselSobre() {


  
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7194221/pexels-photo-7194221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Contra o Feminicídio!</h3>
          <p>Seja mais um combatente, não fique de fora desta causa!</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  );
}

export default CarrosselSobre;