import React,{Fragment, Component} from 'react';
import '../assets/css/cliente.css';
import axios from 'axios';
import ruta from '../rutaAPI';
import { withRouter } from "react-router-dom";

import FilaPortafolioAdmin from './FilaPortafolioAdmin';
import Pestandar from './PestandarV3';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 // NavLink
} from "react-router-dom";


export default  class Uadmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
          portafolios: []
        };
      }
    actualizarDatosPortafolio(identificador){
      const filtredData = this.state.portafolios.filter(item => item._id !== identificador);
      this.setState({portafolios:filtredData});
      /* alert(`identificador:${identificador}\n ${JSON.stringify(filtredData)}`); */
      //this.render();
      window.location.reload(true);

    }
      componentDidMount() {
        let config = {
            headers: {
              authorization:`Bearer ${localStorage.token}` ,
            }
            }
            let apiURL = `${ruta.ruta_api}/api`;
            axios
      .get(apiURL,config)
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
       /*  alert(`Estos son los portafolios:${JSON.stringify(this.state.portafolios)}`); */
        const salida =this.state.portafolios.map((portafolio,i) => {
        /*  alert(`${i} -- ${JSON.stringify(portafolio)}`); */
          return <FilaPortafolioAdmin portafolio={portafolio} 
          renderizarTabla={(id)=>{this.actualizarDatosPortafolio(id)}} />;
        });
       
        return salida; 
       
    }
    render(){
    return (
        <div class="d-flex justify-content-center">
            <p class="text-center">
            <div class="col-sm-9">
            <div class="card text-center">
            <img classNameName="card-img-top" src='../assets/img/testimonials/testimonials-1.jpg' alt="Card image cap"/>
                    <div classNameName="card-body">
                        <br/>
                        
                        <br/>
                        <h5 classNameName="card-title">Administrador</h5>
                        <br/>
                        
                        <br/>
                        <Link target="_blank" className="btn btn-dark"  to="/cambiar">Cambiar contraseña</Link>
                        <br/>
                        <br/>
                    </div>
                    
                
            </div>
            
            
        </div>
        <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Celular</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                   {this.informacionPortafolios()} 
               

               
                </tbody>
                </table>
            </p>
            
        </div>
        
    );
    }
}

