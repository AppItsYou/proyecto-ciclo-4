import React, { Component } from 'react';
import axios from 'axios';
import ruta from '../rutaAPI';
import '../assets/css/estandar.css';
import swal from "sweetalert";

export default class Fcontacto extends Component {

    constructor(props) {
      super(props)
  
      // Setting up functions
      this.onChangeName= this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeSubject = this.onChangeSubject.bind(this);
      this.onChangeMessage = this.onChangeMessage.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      // Setting up state
      this.state = {
        name:"",  
        email: "",
        subject:"",
        text:"correo desde itsyou",
        message:""
      }
    }
  
    onChangeName(e) {
      this.setState({ name: e.target.value })
    }

    onChangeSubject(e) {
        this.setState({ subject: e.target.value })
      }
  
    onChangeEmail(e) {
      this.setState({ email: e.target.value })
    }
  
    onChangeMessage(e) {
      this.setState({ message: e.target.value })
    }
  
    onSubmit(e) {
      e.preventDefault()
      let mesajeria=`<h3>Remitente: ${this.state.name} <br/> email:${this.state.email}</h3>
      <br/> <br/> Mensaje: ${this.state.message}`;

      const informacion = {
        email: this.state.email,
        subject:this.state.subject,
        text:"correo desde itsyou",
        message:mesajeria
        
      };
  
      let apiURL = `${ruta.ruta_api}/usuario-servicios/correo-consulta`;
         
      axios
        .post(apiURL, informacion) 
        .then((res) => {
         
         let resultado= res.data.mensaje;
         swal({
           title:"Correo Contacto",
           text:resultado,
           icon:"success",
           button:"Aceptar"
          });
         this.setState({
          name:"",  
          email: "",
          subject:"",
          text:"correo desde itsyou",
          message:""
        });
       })
        .catch((error) => {
          console.log(error);
          alert("no se puedo entregar el mensaje al administrador");
        });
  
      
    }

render() {
    return (
        <div id="contact" className="contact">
            <div className="container" style={{width: "500px"}}>
            <br/>
            <br/>
                <div className="section-title">
                    <h2>Contacto</h2>
                    <h4>Canales de contacto</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        
                    </div>
                    <div className="row mt-2">
                        <div className="info-box">
                        <i className="bx bx-envelope"></i>
                        <h3>Correo Electrónico</h3>
                        <p>appitsyou@gmail.com</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={this.onSubmit}  className="php-email-form mt-4">
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name"
                            value={this.state.name} onChange={this.onChangeName} placeholder="Nombre" 
                            data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate"></div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email"
                            value={this.state.email} onChange={this.onChangeEmail} placeholder="Correo electrónico" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate"></div>
                        </div>
                        
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject"
                        value={this.state.subject} onChange={this.onChangeSubject} placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validate"></div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows="5" 
                        data-rule="required" data-msg="Please write something for us"
                        value={this.state.message} onChange={this.onChangeMessage} placeholder="Mensaje"></textarea>
                        <div className="validate"></div>
                    </div>
                    
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit" className="btn btn-dark">Enviar</button></div>
                    
                </form>
                
            </div>
        </div>
    );
}
}








