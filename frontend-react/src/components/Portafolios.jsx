import React,{Fragment, Component} from 'react';
import axios from 'axios';
import ruta from '../rutaAPI';
import '../assets/css/Porta.css';
import Footer2 from '../components/footer/Footer2.js';
import { Link } from 'react-router-dom';

export default class Portafolios extends Component {
  

deletePortafolio() {
let apiURL = `${ruta.ruta_api}/api/delete-portafolio/${this.props.portafolio._id}`;

if (window.confirm("Realmente desea borrar?")) {
    axios
      .delete(apiURL)
      .then(() => {
        return this.props.renderizarTabla(this.props.portafolio._id);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
}

/********************* */
autorizarPortafolio() {
    let apiURL = `${ruta.ruta_api}/api/update-portafolio/${this.props.portafolio._id}`;
    if (window.confirm("Realmente desea solicitar aurorización?")) {
    let filtro={estado:"AUTORIZADO"}

    axios
      .put(apiURL, filtro)
      .then((res) => {
        console.log(res);
        this.setState(prevState => {
            let data = Object.assign({}, prevState.data);
            data.estado = 'AUTORIZADO';
            return { data };
          }); 
      })
      .catch((error) => {
        console.log(error);
      });
  }
  }


    constructor(props) {
        super(props)
        this.state = {
          portafolios: [],
          // data:props.portafolio,
          // portafolios:props.portafolios,
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
                 pathImg="assets/img/user.png";
            }
            return <div >
            <div className="testimonial-item">
            <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            {portafolio.lema} Celular {portafolio.phone}
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src={pathImg} className="testimonial-img" alt="" />
            <h3>{portafolio.name}</h3>
            <h4>{portafolio.email}</h4>
             <h4>{portafolio.imgUrl}</h4>
             {/* <Link to={"/ver-portafolio2/" + this.props.portafolio._id}>
                                Ver </Link> */}
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
