import React, { Component } from "react";
import axios from 'axios';
import ruta from '../rutaAPI';
import '../assets/css/style.css';
import swal from "sweetalert";
import {

    Route,
    Link,
   // NavLink
  } from "react-router-dom";

  export default class Xrecuperar extends Component {
    
    constructor(props) {
      super(props)
      
      // funciones para  cambio de valores 
      this.cambiarEmail = this.cambiarEmail.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      // estado de variables
      this.state = {
        email: '',
          }
      this.resultado="";
      this.salida="";
    }
  
    cambiarEmail(e) {
      this.setState({ email: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        let apiURL = `${ruta.ruta_api}/usuario-servicios/recuperar-clave`;
       // alert(apiURL);
         
      axios
        .post(apiURL, this.state) 
        .then((res) => {
         
         this.salida= res.data.mensaje;
         
         swal({
          title:"Recuperación de password",
          text:this.salida,
          icon:"success",
          button:"Aceptar"
         });
         this.esGuardado = true;
       })
        .catch((error) => {
          console.log(error);
          swal({
            title:"Recuperación password",
            text:"Imposile recuperar password !",
            icon:"error",
            button:"Aceptar"
           });
        });
      }
    render(){
        return (
        <div id="services" className="services">
            <div className="container" style={{width: "500px"}}>
            <br/>
            <br/>
                <div className="section-title">
                    <h2>Recuperar Password</h2>
                    
                    <form onSubmit={this.onSubmit}   >
                        <div className="form-row">
                        <br/>
                            <div className="form-group">
                                <h4>Email Registrado</h4>
                                <br/>
                                <input type="email" name="email" className="form-control" 
                                 value={this.state.email} onChange={this.cambiarEmail}
                                id="email" placeholder="Ingrese su email registrado en itsYou" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                            <br/>
                            
                        </div>
                        <br/>
                        <div class="btn-toolbar">
                            <div class="btn-group me-2">
                            <button class="btn btn-dark">Entrar</button>
                           
                            <br/>

                            </div>
                           
                            <a href="/Portada" className="btn btn-dark"> Volver</a>
 
                        </div>
                        <br/>
                        
                    </form>
                </div>
            </div>
        </div>
    );
  }
  }
/* export default Dsesion; */