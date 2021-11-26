import React, { Component } from 'react';
import axios from 'axios';
import '../assets/css/style.css';
import ruta from '../rutaAPI';
import {withRouter} from "react-router-dom";



 class Xcambiar extends Component {

    constructor(props) {
      super(props)
  
      // Setting up functions
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangePasswordEscritoNuevamente = this.onChangePasswordEscritoNuevamente.bind(this);
      this.enviarCambioPassword = this.enviarCambioPassword.bind(this);
  
      // Setting up state
      this.state = {
       password:'',
       passwordEscritoNuevamente:''
      }
    }
  
    onChangePassword(e) {
      this.setState({ password: e.target.value })
    }

    onChangePasswordEscritoNuevamente(e) {
        this.setState({ passwordEscritoNuevamente: e.target.value })
      }
  enviarCambioPassword(e){
    e.preventDefault()
    let apiURL = `${ruta.ruta_api}/usuario-servicios/cambiar-clave`;
    let config = {
    headers: {
    authorization:`Bearer ${localStorage.token}` ,
  }
 }
if (this.state.password === this.state.passwordEscritoNuevamente) {
 axios
   .post(apiURL, this.state, config) 
   .then((res) => {
    alert("Password actualizado");
    
  })
   .catch((error) => {
     console.log(error);
   });
}
else {
   
   alert("Los campos de pasword no coincide");
 }

  }
render() {
    return (
        <div id="services" className="services">
            <div className="container" style={{width: "500px"}}>
            <br/>
            <br/>
                <div className="section-title">
                    <h2>Cambiar contraseña</h2>
                    
                    <form onSubmit={this.enviarCambioPassword}  className="php-email-form mt-4">
                        <div className="form-row">
                        <br/>
                            <div className="form-group">
                            <h4>Digite un nuevo password</h4>
                            <br/>
                                <input type="password" className="form-control" 
                                value={this.state.password}
                                onChange={this.onChangePassword} placeholder="Contraseña" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                            <br/>
                            <div className="form-group">
                            <h4>Repita el nuevo password</h4>
                            <br/>
                                <input type="password" className="form-control" 
                                value={this.state.passwordEscritoNuevamente}
                                onChange={this.onChangePasswordEscritoNuevamente} placeholder="Contraseña" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                        </div>
                        <br/>
                        <div class="btn-toolbar">
                            <div class="btn-group me-2">
                            <button class="btn btn-dark">Guardar</button>
                           
                            </div>
                            
                            </div>
                        <br/>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
 }

 export default withRouter(Xcambiar);