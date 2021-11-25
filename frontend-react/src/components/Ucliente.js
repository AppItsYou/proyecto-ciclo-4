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
      this.render();

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
                        <h5 classNameName="card-title">Matt Brandon</h5>
                        <br/>
                        <h5 classNameName="card-title">Freelancer</h5>
                        <br/>
                        <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <br/>
                        <h5>Seleccione la plantilla del portafolio</h5>
                        <br/>
                        
                        <Link className="btn btn-dark"  to="/crear-portafolio">Crear portafolio</Link>
                        
                        <br/>
                        <br/>
                        <button type="button" class="btn btn-dark">Cambiar contraseña</button>
                        <br/>
                        <br/>
                    </div>
                    
                
            </div>
            
<<<<<<< HEAD
            
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
||||||| merged common ancestors
            <div classNameName="table-responsive-md">
                <table classNameName="table">
                    <thead>
                        <tr>
                            <th colspan="3">Portafolios Creados</th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th colspan="2">Tipo de portafolio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>Estandar</td>
                            <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" class="btn btn-dark">Ver</button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" class="btn btn-dark">Editar</button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-dark">Borrar</button>
                                </div>
                                <div class="btn-group" role="group" aria-label="Third group">
                                <button type="button" class="btn btn-dark">Publicar</button>
                                </div>
                            </div>
                            
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
=======
            
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
                    <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="align-top">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" class="btn btn-dark">Ver</button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-dark">Borrar</button>
                                </div>
                                <div class="btn-group" role="group" aria-label="Third group">
                                <button type="button" class="btn btn-dark">Publicar</button>
                                </div>
                            </div>
                    </td>
                    </tr>
                </tbody>
                </table>
>>>>>>> 4629513bc2ba6223e66d023e7a331dd53ab690cc
            </p>
            
        </div>
        
    );
  }
      }
      