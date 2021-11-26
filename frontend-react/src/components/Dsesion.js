import React, { Component } from "react";
import axios from 'axios';
import ruta from '../rutaAPI';
import '../assets/css/style.css';
import { withRouter } from "react-router-dom";
import {

    Route,
    Link,
   // NavLink
  } from "react-router-dom";

 
 class Dsesion extends Component {
    
    constructor(props) {
      super(props)
      
      // funciones para  cambio de valores 
      this.cambiarEmail = this.cambiarEmail.bind(this);
      this.cambiarPassword = this.cambiarPassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      // estado de variables
      this.state = {
        email: '',
        password: ''
      }
      this.resultado="";
      this.salida="";
      
      
    }
  
    cambiarEmail(e) {
      this.setState({ email: e.target.value })
    }
  
    cambiarPassword(e) {
      this.setState({ password: e.target.value })
    }

    

    onSubmit(e) {
      e.preventDefault()
     
      let apiURL = `${ruta.ruta_api}/usuario-servicios/sesion-usuario`;
        
      axios
        .post(apiURL, this.state)
        .then((res) => {
         
         this.resultado= res.data.data;
         
          if(this.resultado===null){
           this.salida="Credenciales erroneas o usuario no registrado en el sistema";
         }
         else{
           localStorage.setItem("token", res.data.token);
            if (this.resultado.tipo_usuario==="regular"){
              this.props.history.push('/cliente');
              
             alert(`regular ${this.resultado.nombre}`)
            }else if (this.resultado.tipo_usuario==="admin")
             {
              alert(`administrador ${this.resultado.nombre}`)
              this.props.history.push('/administrador');
             }
            
                
            this.salida="";
         } 
       })
        .catch((error) => {
          console.log(error);
        });
    }
   render() {
    return (
        <div id="services" className="services">
            <div className="container" style={{width: "500px"}}>
            <br/>
            <br/>
                <div className="section-title">
                    <h2>Iniciar sesión</h2>
                    <h4>Usuario Registrado</h4>
                    {this.resultado}
                    <form  onSubmit={this.onSubmit} role="form" className="php-email-form mt-4">
                        <div className="form-row">
                            <div className="form-group">
                                <input type="email" name="email" value={this.state.email} onChange={this.cambiarEmail}
                                 className="form-control" id="email" placeholder="Ingrese su email registrado en itsYou" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                            <br/>
                            <div className="form-group">
                                 <input type="password" className="form-control" value={this.state.password} onChange={this.cambiarPassword}
                                 name="password" id="password" placeholder="password" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                        </div>
                        <br/>
                        <div class="btn-toolbar">
                            <div class="btn-group me-2">
                            <button class="btn btn-dark">Entrar</button>
                           
                            </div>
                        
                           
                            <Link  to="/recuperar">Recuperar contraseña</Link>
                        </div>
                        
                        <br/>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}
}

//export default Dsesion;
export default withRouter(Dsesion);