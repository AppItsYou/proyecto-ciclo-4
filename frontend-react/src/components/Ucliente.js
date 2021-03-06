import React,{Fragment, Component} from 'react';
import '../assets/css/cliente.css';
import axios from 'axios';
import ruta from '../rutaAPI';

import FilaPortafolioCliente from './FilaPortafolioCliente';
import Pestandar from './PestandarV3';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 // NavLink
} from "react-router-dom";


export default  class Ucliente extends Component {
    constructor(props) {
        super(props)
        this.state = {
          portafolios: []
        };
      }
    actualizarDatosPortafolio(identificador){
      const filtredData = this.state.portafolios.filter(item => item._id !== identificador);
      this.setState({portafolios:filtredData});
      window.location.reload(true);
      //this.render();

    }
      componentDidMount() {
        let config = {
            headers: {
              authorization:`Bearer ${localStorage.token}` ,
            }
            }
            let apiURL = `${ruta.ruta_api}/api/portafolio_idUsuario`;
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
        
        const salida =this.state.portafolios.map((portafolio, i) => {
            return <FilaPortafolioCliente portafolio={portafolio} key={i} 
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
                <img classNameName="card-img-top" src='../assets/img/user.png' alt="Card image cap"/>
                    <div classNameName="card-body">
                        <br/>
                        <h5 classNameName="card-title">Usuario Registrado</h5>
                        <br/>
                        
                        <h5>Seleccione la plantilla del portafolio</h5>
                        <br/>
                        
                        <Link className="btn btn-dark"  to="/crear-portafolio">Crear portafolio</Link>
                        
                        <br/>
                        <br/>
                        <Link target="_blank" className="btn btn-dark"  to="/cambiar">Cambiar contrase??a</Link>
                        
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
      