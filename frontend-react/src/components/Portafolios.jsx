import React,{Fragment, Component} from 'react';
import axios from 'axios';
import ruta from '../rutaAPI';
import '../assets/css/Porta.css';
import Footer2 from '../components/footer/Footer2.js';

export default class Portafolios extends Component {
    constructor(props) {
        super(props)
        this.state = {
          portafolios: []
        };
      }
    
      componentDidMount() {
        let apiURL = `${ruta.ruta_api}/api/portafolios-autorizados`;
    axios
      .get(apiURL)
      .then((res) => {
        this.setState({
            portafolios: res.data
          });
      })
      .catch((error) => {
        console.log(error);
      });
      }

      /******informacion del portafolio */
      informacionPortafolios() {
        const salida =this.state.portafolios.map((portafolio, i) => {
            let pathImg =`${ruta.ruta_api}/public/${portafolio.imgUrl}`;
            if (!portafolio.imgUrl){
                 pathImg="assets/img/testimonials/testimonials-1.jpg";
            }
            return <div >
            <div className="testimonial-item">
            <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            {portafolio.lema}
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={pathImg} className="testimonial-img" alt="" />
            <h3>{portafolio.name}</h3>
            <h4>{portafolio.email}</h4>
             <h4>{portafolio.imgUrl}</h4>
        </div>
        <br/>
        </div>
        });
        
        return salida;
      }

      render() {
    return (
      <div className="App" >
    <Fragment className="App-porta" >
        
        <div className="testimonials container" style={{width: "500px"}}>
            <br/>
            <br/>
        <div className="section-title">
        <h2>Perfiles publicados</h2>
        </div>
        <div className="owl-carousel testimonials-carousel">

        {this.informacionPortafolios()}

        

        </div>

        </div>
        <Footer2 />
</Fragment></div>
    );
}

}
