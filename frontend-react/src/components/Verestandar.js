import React, { Component } from 'react';
// import { useState } from 'react';
import axios from 'axios';
import ruta from '../rutaAPI';
import {withRouter} from "react-router-dom";
import '../assets/css/estandar.css';
import { Link } from "react-router-dom";

 class Verestandar extends Component {

    constructor(props) {
      super(props)
  
      // Setting up functions
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeLema = this.onChangeLema.bind(this);
      this.onChangeServicio = this.onChangeServicio.bind(this);
      this.onChangeHabilidad = this.onChangeHabilidad.bind(this);
      this.onChangeLogro = this.onChangeLogro.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      // Setting up state
      this.state = {
        name: '',
        lema: '',
        servicio: '',
        habilidad: '',
        logro: '',
        email: '',
        phone: ''
        
      }
    }
  
    componentDidMount() {
      axios.get(`${ruta.ruta_api}/api/edit-portafolio/` + this.props.match.params.id)
        .then(res => {
          this.setState({
            name: res.data.name,
            lema: res.data.lema,
            servicio: res.data.servicio,
            habilidad: res.data.habilidad,
            logro: res.data.logro,
            email: res.data.email,
            phone: res.data.phone,
            
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  

    onChangeName(e) {
      this.setState({ name: e.target.value })
    }

    onChangeLema(e) {
        this.setState({ lema: e.target.value })
      }
    
      onChangeServicio(e) {
      this.setState({ servicio: e.target.value })
    }
    
    onChangeHabilidad(e) {
        this.setState({ habilidad: e.target.value })
      }

      onChangeLogro(e) {
        this.setState({ logro: e.target.value })
      }
    
    onChangeEmail(e) {
      this.setState({ email: e.target.value })
    }
  
    onChangePhone(e) {
      this.setState({ phone: e.target.value })
    }
  
    onSubmit(e) {
      e.preventDefault()
  
      const editarPortafolio = {
        name: this.state.name,
        lema: this.state.lema,
        servicio: this.state.servicio,
        habilidad: this.state.habilidad,
        logro: this.state.logro,
        email: this.state.email,
        phone: this.state.phone,
        
       
        
      };
     
    let apiURL= `${ruta.ruta_api}/api/update-portafolio/`
    + this.props.match.params.id;
    axios.put(apiURL, editarPortafolio)
        .then(res => {
            alert('Portafolio actualizado con exito !');
            console.log(res.data)
            this.props.history.push('/cliente');})
        .catch((error) => {
             alert("error en actualizacion portafolio");
              console.log(error)
            })
            
          }      
    render() {
        return (
        
            <div class="row justify-content-center">
            <div class="col-md-6">
            <br/>
                <div className="section-title">
                    <h2>Visualizar</h2>
                    
                    
                </div>
                <div className="col-lg-4">
                    <img className="card-img-top" src='../assets/img/testimonials/testimonials-4.jpg' alt="Card image cap"/>
                    </div>
                    <br/>
                
                <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                            type="text"
                            className="form-control"
                            value={this.state.name} onChange={this.onChangeName} 
                            required
                            disabled
                            />
                        </div>
                    <br/>

                        <div className="form-group">
                            <label>Lema de vida</label>
                            <input
                            type="text"
                            className="form-control"
                            value={this.state.lema} onChange={this.onChangeLema}
                            required
                            disabled
                            />
                        </div>

                    <br/>
                    <div className="container" data-aos="zoom-in" data-aos-delay="100">
                        
                        
                        <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Servicios a ofrecer</h5>
                            <p className="card-text"><input
                                type="text"
                                className="form-control"
                                value={this.state.servicio} onChange={this.onChangeServicio}
                                required
                                disabled
                                /></p>
                            
                            </div>
                        </div>
                        <div className="card">
                            
                            <div className="card-body">
                            <h5 className="card-title">Habilidades blandas</h5>
                            <p className="card-text"><input
                                type="text"
                                className="form-control"
                                value={this.state.habilidad} onChange={this.onChangeHabilidad}
                                required
                                disabled
                                /></p>
                            
                            </div>
                        </div>
                        <div className="card">
                            
                            <div className="card-body">
                            <h5 className="card-title">Logros obtenidos</h5>
                            <p className="card-text"><input
                                type="text"
                                class="form-control"
                                value={this.state.logro} onChange={this.onChangeLogro}
                                required
                                disabled
                                /></p>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    <br/>

                    <div className="container">
                        <h5>Contacto: </h5>
                        <label>Correo electronico</label>
                        <input
                        type="email"
                        class="form-control"
                        value={this.state.email} onChange={this.onChangeEmail} 
                        required
                        disabled
                        />
                        <br/>
                        <label>Celular</label>
                        <input
                        type="text"
                        class="form-control"
                        value={this.state.phone} onChange={this.onChangePhone} 
                        required
                        disabled
                        />
                    </div>

                    <br/>

                    <div class="btn-toolbar">
                            <div class="btn-group me-2">
                            <button class="btn btn-dark" >
                               <Link className="nav-link" to="/cliente">Regresar</Link> 
                              </button>
                            </div>
                            </div>
                </form>
            </div>
        </div>);
      }
    }
  
    export default withRouter (Verestandar)