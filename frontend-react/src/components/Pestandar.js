import React, { Component } from 'react';
import axios from 'axios';
import ruta from '../rutaAPI';
import {withRouter} from "react-router-dom";
import '../assets/css/estandar.css';

 class Pestandar extends Component {

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
        phone: '',
        estado: 'CREADO',
        /* usuario_id: '',
        _id: '' */
      }
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
  
      const crearCuenta = {
        name: this.state.name,
        lema: this.state.lema,
        servicio: this.state.servicio,
        habilidad: this.state.habilidad,
        logro: this.state.logro,
        email: this.state.email,
        phone: this.state.phone,
        estado: 'CREADO',
        /* usuario_id: '',
        _id: '' */
        
      };
      let apiURL = `${ruta.ruta_api}/api/crear-portafolio`;
      let config = {
      headers: {
        authorization:`Bearer ${localStorage.token}` ,
      }
    }
      axios.post(apiURL,crearCuenta, config)
        .then(res => {
            alert('Portafolio creado con exito !');
            console.log(res.data)
            this.props.history.push('/cliente');});
            
  
      this.setState({
        name: '',
        lema: '',
        servicio: '',
        habilidad: '',
        logro: '',
        email: '',
        phone: '',
        estado: 'CREADO',
        usuario_id: '',
        _id: ''
      });
    }

    render() {
        return (
        
            <div class="row justify-content-center">
            <div class="col-md-6">
            <br/>
                <div className="section-title">
                    <h2>Portafolio</h2>
                    
                    
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
                        />
                        <br/>
                        <label>Celular</label>
                        <input
                        type="text"
                        class="form-control"
                        value={this.state.phone} onChange={this.onChangePhone} 
                        required
                        />
                    </div>

                    <br/>

                    <div class="btn-toolbar">
                            <div class="btn-group me-2">
                            <button class="btn btn-dark">Guardar</button>
                           
                            </div>
                            </div>
                </form>
            </div>
        </div>);
      }
    }
  
    export default withRouter (Pestandar)