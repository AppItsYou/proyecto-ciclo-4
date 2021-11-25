import React,{Fragment} from 'react';

import Footer from '../components/footer/Footer.js';

import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'



export const Portada = () => {
    return (
      <>

			<div className="App">
        <header className="App-header">
          
          <div className="col-lg-5">
            <img classNameName="card-img-top" src='../assets/img/testimonials/testimonials-2.jpg' alt="Card image cap"/>
            <h2> <span>Haz que las cosas sucedan, con</span><h1 id="marca" class="marca"><a href="/">it's You  </a></h1> </h2>

          </div>
          {/* <div className="col-lg-7">
          
          <img classNameName="card-img-top" src='../assets/img/testimonials/testimonials-3.jpg' alt="Card image cap"/>
          </div> */}


          <div className="col-lg-6">
          
          <Carousel>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src="../assets/img/testimonials/testimonials-3.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Abre tu cuenta</h3>
                <p>Crea tu portafolio de hoja de vida</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src="../assets/img/testimonials/testimonials-5.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Con el portafolio aplica al cargo deseado</h3>
                <p>Describe tus habilidades duras y blandas</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src="../assets/img/testimonials/testimonials-6.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Actualízate, no más hojas de vida impresas</h3>
                <p>Envía tu portafolio web</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
        
          
        </header>

      </div>

	  		<Footer />

	  		</>
    );
}

export default Portada ;