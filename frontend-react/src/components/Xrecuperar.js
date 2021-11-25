<<<<<<< HEAD
import React, { Component } from "react";
import axios from 'axios';
import ruta from '../rutaAPI';
||||||| merged common ancestors
import React from 'react';
=======
import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
>>>>>>> 4629513bc2ba6223e66d023e7a331dd53ab690cc
import '../assets/css/style.css';
import {

<<<<<<< HEAD
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
         alert(this.salida);
         this.esGuardado = true;
       })
        .catch((error) => {
          console.log(error);
        });
      }
    render(){
        return (
||||||| merged common ancestors
const Dsesion = () => {
    return (
=======
const Dsesion = () => {
    const [email, setEmail] = useState('')

    const recuperar=async(e)=>{
        e.preventDefault()
        const respuesta=await Axios.post('https://perfiles-mintic.herokuapp.com/usuario-servicios/recuperar-clave',recuperar)
        console.log(respuesta)
    }


    return (
>>>>>>> 4629513bc2ba6223e66d023e7a331dd53ab690cc
        <div id="services" className="services">
            <div className="container" style={{width: "500px"}}>
            <br/>
            <br/>
                <div className="section-title">
                    <h2>Recuperar Password</h2>
                    
<<<<<<< HEAD
                    <form onSubmit={this.onSubmit}   >
||||||| merged common ancestors
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
=======
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4" onSubmit={recuperar}>
>>>>>>> 4629513bc2ba6223e66d023e7a331dd53ab690cc
                        <div className="form-row">
                        <br/>
                            <div className="form-group">
                                <h4>Email Registrado</h4>
                                <br/>
<<<<<<< HEAD
                                <input type="email" name="email" className="form-control" 
                                 value={this.state.email} onChange={this.cambiarEmail}
                                id="email" placeholder="Ingrese su email registrado en itsYou" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
||||||| merged common ancestors
                                <input type="text" name="name" className="form-control" id="name" placeholder="Ingrese su email registrado en itsYou" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
=======
                                <input type="text" name="name" className="form-control" id="name" placeholder="Ingrese su email registrado en itsYou" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={e=>setEmail(e.target.value)}/>
>>>>>>> 4629513bc2ba6223e66d023e7a331dd53ab690cc
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