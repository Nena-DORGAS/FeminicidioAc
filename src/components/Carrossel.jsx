import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrossel() {
return (
<Carousel>
<Carousel.Item>



        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5723318/pexels-photo-5723318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Contra o Feminicídio!</h3>
          <p>Seja mais um combatente, não fique de fora desta causa!</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>



        <img
          className="d-block w-100"
          src="https://www.money.it/IMG/arton100788.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Contra o Feminicídio!</h3>
          <p>Seja mais um combatente, não fique de fora desta causa!</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>




        <img
          className="d-block w-100"
          src="https://img.freepik.com/vetores-gratis/pare-o-conceito-de-violencia-de-genero_23-2148581693.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Contra o Feminicídio!</h3>
          <p>Seja mais um combatente, não fique de fora desta causa!</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    );
}

export default Carrossel;