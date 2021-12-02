import React, { Component } from 'react';
import axios from 'axios';
import ruta from '../rutaAPI';
import '../assets/css/estandar.css';
import swal from 'sweetalert';
import {

  Route,
  Link,
 // NavLink
} from "react-router-dom";

export default class Ecuenta extends Component {

    constructor(props) {
      super(props)
  
      // Setting up functions
      this.onChangeNombre = this.onChangeNombre.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      // Setting up state
      this.state = {
        nombre: '',
        email: '',
        password: '',
        imagenPerfil: 'none',
        tipo_usuario: 'regular'
      }
    }
  
    onChangeNombre(e) {
      this.setState({ nombre: e.target.value })
    }
  
    onChangeEmail(e) {
      this.setState({ email: e.target.value })
    }
  
    onChangePassword(e) {
      this.setState({ password: e.target.value })
    }
  
    onSubmit(e) {
      e.preventDefault()
  
      const crearCuenta = {
        nombre: this.state.nombre,
        email: this.state.email,
        password: this.state.password,
        imagenPerfil: 'none',
        tipo_usuario: 'regular'
        
      };
      let apiURL = `${ruta.ruta_api}/usuario-servicios/crear-usuario`;
      axios.post(apiURL, crearCuenta)
        .then(res => {
          swal({
            title:"Registro Usuario",
            text:"El usuario se ha registrado con éxito !",
            icon:"success",
            button:"Aceptar"
           });
         console.log(res.data)})
        .catch((error) => {
          swal({
            title:"Registro Usuario",
            text:"El usuario no se registro !",
            icon:"error",
            button:"Aceptar"
           });
            });
  
      this.setState({
        nombre: '',
        email: '',
        password: '',
        imagenPerfil: 'none',
        tipo_usuario: 'regular'
      });
    }

    render() {
        return (
        
            <div id="portfolio" className="portfolio">
                         <div className="container" style={{width: "500px"}}>
                         <br/>
                         <br/>
                             <div className="section-title">
                                 <h2>Crear Cuenta</h2>
                                 <h4>Ingresa tus datos</h4>
                             </div>
                             <div className="row mt-2">
                                 <form onSubmit={this.onSubmit}>
                                     <div className="form-group">
                                             <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" value={this.state.nombre} onChange={this.onChangeNombre} />
                                             <div className="validate"></div>
                                     </div>
                                     <br/>
                                     <div className="form-group">
                                             <input type="email" className="form-control" name="email" id="email" placeholder="Correo Electrónico" data-rule="email" data-msg="Please enter a valid email" value={this.state.email} onChange={this.onChangeEmail} />
                                             <div className="validate"></div>
                                     </div>
                                     <br/>
                                     <div className="form-group">
                                         <input type="text" className="form-control" name="subject" id="subject" placeholder="Contraseña" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" value={this.state.password} onChange={this.onChangePassword} />
                                         <div className="validate"></div>
                                     </div>
                                     <br/>
                                     <div className="text-center"><button type="submit" className="btn btn-dark">Guardar</button></div>
                                 </form>
                                 <br/>
                                 <br/>
                                 <div className="datos">
                                 <br/>
                                     <h4>
                                     Política de tratamiento de datos
                                     </h4>
                                     <br/>
                                     <p>Al crear su cuenta, está aceptando nuestra política de 
                                     </p>
                                     <p>tratamiendo de datos
                                     </p>
                                     <Link  to="/politicas">Ver Política de tratamiento de datos</Link>
                                     
                                 </div>
                             </div>
                         </div>
                     </div>);
      }
    }
  